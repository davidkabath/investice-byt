import React, { useState } from "react";
import Header from "./header/Header";

import InputForm from "./inputForm/InputForm";
import Results from "./results/Results";
import { computeInvestmentResults } from "./utils/Math.js";

import { Container } from "react-bootstrap";

import "./index.css";

const App = () => {
  const [results, setResults] = useState({});
  const [mortgageEnabled, setMortgageEnabled] = useState(true);

  //Use for debugging
  const useDefaultFormInput = false;

  const defaultFormInput = {
    investmentPeriod: 30,
    propertyCost: 5000000,
    initialMaintenance: 100000,
    monthlyRent: 14000,
    monthlyExpenses: 30,
    emptyMonths: 1.0,
    homeMaintenance: 5000,
    valueDevelopment: 50,
    mortgageValue: 4000000,
    mortgagePeriod: 30,
    mortgageInterest: 3.7,
  };

  const toggleMortgage = (event) => {
    setMortgageEnabled(event.target.checked);
  };

  const onSubmit = (inputData) => {
    const resultsState = computeInvestmentResults(inputData);

    setResults(resultsState);
  };

  return (
    <Container fluid className="main-container">
      <Header />
      <InputForm
        onSubmit={onSubmit}
        toggleMortgage={toggleMortgage}
        mortgageEnabled={mortgageEnabled}
        defaultFormInput={defaultFormInput}
        useDefaultFormInput={useDefaultFormInput}
      />
      <div>
        <Results results={results} />
      </div>
    </Container>
  );
};

export default App;
