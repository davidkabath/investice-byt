import React, { Component } from "react";
import Header from "./Header";

import InputForm from "./InputForm";
import Results from "./Results";

import { Container } from "react-bootstrap";

import "./App.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super();
    this.tableRef = React.createRef();
  }

  state = {
    formInputData: {},
    results: {},
    resultsProspect: {},
    mortgageEnabled: true,
  };

  //Use for debugging
  useDefaultFormInput = false;

  defaultFormInput = {
    propertyInvestment: 600000,
    initialMaintenence: 100000,
    monthlyRent: 11000,
    monthlyExpenses: 30,
    emptyMonths: 1.0,
    homeMaintenance: 5000,
    mortgageValue: 2400000,
    mortgagePeriod: 20,
    mortgageInterest: 2.28,
  };

  toggleMortgage = (event) => {
    this.setState({ mortgageEnabled: event.target.checked });
  };

  onSubmit = (formInputData) => {
    const resultsState = this.computeInvestmentResults(formInputData);

    this.setState({
      formInputData: formInputData,
      results: resultsState,
      resultsProspect: {},
    });

    //setTimeout(this.scrollToTable, 500);
  };

  prospectOnSubmit = (valueDevelopment) => {
    const resultsProspect = this.computeInvestmentResults(
      this.state.formInputData,
      valueDevelopment
    );

    this.setState({
      resultsProspect: resultsProspect,
    });
  };

  computeInvestmentResults = (formInputData, valueDevelopment) => {
    const resultsState = {};

    //if mortgage is disabled
    if (!formInputData.mortgage) {
      formInputData.mortgageValue = 0;
      formInputData.mortgagePeriod = 0;
      formInputData.mortgageInterest = 0;
      resultsState.monthlyMortgagePayment = 0;
    } else {
      //compute mothly mortgage payment
      resultsState.monthlyMortgagePayment = this.computeMonthlyMortgagePayment(
        formInputData
      );
    }

    //compute monthly net revenue
    resultsState.monthlyNetRevenue = this.computeMonthlyNetRevenue(
      formInputData
    );

    //create table based on a rent and a period of investment.
    //mortgage period + x years <= 50 in total; 5 years period;
    resultsState.rentInvestmentPeriodTable = this.getRentInvestmentPeriodTable(
      formInputData,
      resultsState.monthlyMortgagePayment,
      valueDevelopment
    );

    resultsState.mortgagePeriod = formInputData.mortgagePeriod;

    //round results
    this.roundResults(resultsState);

    return resultsState;
  };

  //compute mothly mortgage payment
  computeMonthlyMortgagePayment = (formInputData) => {
    const yearlyInterest =
      parseFloat(formInputData.mortgageInterest) / 100 / 12;
    const mortgagePeriod = parseInt(formInputData.mortgagePeriod, 10) * 12;
    const mortgageValue = parseInt(formInputData.mortgageValue, 10);

    const monthlyPayment =
      mortgageValue *
      (1 + yearlyInterest) ** mortgagePeriod *
      (yearlyInterest / ((1 + yearlyInterest) ** mortgagePeriod - 1));
    return monthlyPayment;
  };

  //compute monthly net revenue
  computeMonthlyNetRevenue = (formInputData, monthlyRent) => {
    if (monthlyRent === undefined) {
      monthlyRent = parseInt(formInputData.monthlyRent, 10);
    }
    const emptyMonths = parseFloat(formInputData.emptyMonths, 10);
    const homeMaintenance = parseInt(formInputData.homeMaintenance, 10);
    const monthlyExpenses = parseInt(formInputData.monthlyExpenses, 10) / 100;

    const computeMonthlyNetRevenue =
      (monthlyRent * (12 - emptyMonths) -
        homeMaintenance -
        monthlyRent * (12 - emptyMonths) * monthlyExpenses -
        (monthlyRent * (12 - emptyMonths) -
          monthlyRent * (12 - emptyMonths) * monthlyExpenses -
          homeMaintenance -
          24840) *
          0.15) /
      12;

    return computeMonthlyNetRevenue;
  };

  //monthlyRent -> + 500, 5 rows -> -1000, - 500, x (bold), +500, +1000
  //investmentPeriod -> + 5 years, starting on the mortgagePeriod, max. 50 years mortgagePeriod inclusive.
  getRentInvestmentPeriodTable = (
    formInputData,
    monthlyMortgagePayment,
    valueDevelopment
  ) => {
    const mortgagePeriod = parseInt(formInputData.mortgagePeriod, 10);

    const table = {
      data: [],
      monthlyRent: [],
      investmentPeriod: [],
    };
    const investmentPeriodSet = new Set();
    const monthlyRentTop = parseInt(formInputData.monthlyRent, 10) + 1000;
    for (
      let monthlyRent = parseInt(formInputData.monthlyRent, 10) - 1000;
      monthlyRent <= monthlyRentTop;
      monthlyRent += 500
    ) {
      const row = [];
      table.monthlyRent.push(monthlyRent);
      const monthlyNetRevenue = this.computeMonthlyNetRevenue(
        formInputData,
        monthlyRent
      );

      if (mortgagePeriod % 5 !== 0) {
        const yearlyRevenueInPercentageMortgage = this.computeYearlyProfitInPercentage(
          formInputData,
          monthlyMortgagePayment,
          monthlyNetRevenue,
          undefined,
          valueDevelopment
        );
        row.push(Number(yearlyRevenueInPercentageMortgage).toFixed(2));
        investmentPeriodSet.add(mortgagePeriod);
      }
      for (
        let investmentPeriod =
          mortgagePeriod === 0 ? 5 : Math.ceil(mortgagePeriod / 5) * 5;
        investmentPeriod <= 50;
        investmentPeriod = investmentPeriod + 5
      ) {
        investmentPeriodSet.add(investmentPeriod);
        const yearlyRevenueInPercentage = this.computeYearlyProfitInPercentage(
          formInputData,
          monthlyMortgagePayment,
          monthlyNetRevenue,
          investmentPeriod,
          valueDevelopment
        );

        row.push(Number(yearlyRevenueInPercentage).toFixed(2));
      }
      table.data.push(row);
    }
    table.investmentPeriod = Array.from(investmentPeriodSet);

    return table;
  };

  //compute yearly net revenue in percentage
  computeYearlyProfitInPercentage = (
    formInputData,
    monthlyMortgagePayment,
    monthlyNetRevenue,
    investmentPeriod,
    valueDevelopment
  ) => {
    if (investmentPeriod === undefined) {
      investmentPeriod = formInputData.mortgagePeriod;
    }
    if (valueDevelopment === undefined) {
      valueDevelopment = 0.0;
    } else {
      valueDevelopment = parseFloat(valueDevelopment, 10);
    }

    const initialMaintenence = parseInt(formInputData.initialMaintenence, 10);
    const propertyInvestment = parseInt(formInputData.propertyInvestment, 10);
    const mortgagePeriod = parseInt(formInputData.mortgagePeriod, 10);
    const mortgageValue = parseInt(formInputData.mortgageValue, 10);

    const yearlyProfitInPercentage =
      ((monthlyNetRevenue * 12 * investmentPeriod +
        (mortgageValue + propertyInvestment) * (1 + valueDevelopment) -
        monthlyMortgagePayment * 12 * mortgagePeriod -
        initialMaintenence -
        propertyInvestment) /
        (monthlyMortgagePayment * 12 * mortgagePeriod +
          initialMaintenence +
          propertyInvestment) /
        investmentPeriod) *
      100;

    return yearlyProfitInPercentage;
  };

  roundResults = (resultsState) => {
    resultsState.monthlyMortgagePayment = Number(
      resultsState.monthlyMortgagePayment
    ).toFixed();
    resultsState.monthlyNetRevenue = Number(
      resultsState.monthlyNetRevenue
    ).toFixed();

    return resultsState;
  };

  scrollToTable = () => window.scrollTo(0, this.tableRef.current.offsetTop);

  render() {
    const { results, mortgageEnabled, resultsProspect } = this.state;

    return (
      <Container fluid className="main-container">
        <Header />
        <InputForm
          onSubmit={this.onSubmit}
          toggleMortgage={this.toggleMortgage}
          mortgageEnabled={mortgageEnabled}
          defaultFormInput={this.defaultFormInput}
          useDefaultFormInput={this.useDefaultFormInput}
        />
        <div ref={this.tableRef}>
          <Results
            prospectOnSubmit={this.prospectOnSubmit}
            results={results}
            resultsProspect={resultsProspect}
          />
        </div>
      </Container>
    );
  }
}

export default App;
