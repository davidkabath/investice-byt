export const computeInvestmentResults = (inputData) => {
  const resultsState = {};

  //if mortgage is disabled
  if (!inputData.mortgage) {
    inputData.mortgageValue = 0;
    inputData.mortgagePeriod = 0;
    inputData.mortgageInterest = 0;
    resultsState.monthlyMortgagePayment = 0;
  } else {
    //compute mothly mortgage payment
    resultsState.monthlyMortgagePayment =
      computeMonthlyMortgagePayment(inputData);
  }

  //compute monthly net revenue
  resultsState.monthlyNetRevenue = computeMonthlyNetRevenue(inputData);

  //TODO
  //create table based on a rent and a period of investment.
  //mortgage period + x years <= 50 in total; 5 years period;
  resultsState.rentInvestmentPeriodTable = getRentInvestmentPeriodTable(
    inputData,
    resultsState.monthlyMortgagePayment
  );

  resultsState.mortgagePeriod = inputData.mortgagePeriod;

  //round results
  roundResults(resultsState);

  return resultsState;
};

//compute monthly mortgage payment
export const computeMonthlyMortgagePayment = (inputData) => {
  const yearlyInterest = parseFloat(inputData.mortgageInterest) / 100 / 12;
  const mortgagePeriod = parseInt(inputData.mortgagePeriod, 10) * 12;
  const mortgageValue = parseInt(inputData.mortgageValue, 10);

  return (
    mortgageValue *
    (1 + yearlyInterest) ** mortgagePeriod *
    (yearlyInterest / ((1 + yearlyInterest) ** mortgagePeriod - 1))
  );
};

//compute monthly net revenue
const computeMonthlyNetRevenue = (inputData, monthlyRent) => {
  if (monthlyRent === undefined) {
    monthlyRent = parseInt(inputData.monthlyRent, 10);
  }
  const emptyMonths = parseFloat(inputData.emptyMonths, 10);
  const homeMaintenance = parseInt(inputData.homeMaintenance, 10);
  const monthlyExpenses = parseInt(inputData.monthlyExpenses, 10) / 100;

  return (
    (monthlyRent * (12 - emptyMonths) -
      homeMaintenance -
      monthlyRent * 12 * monthlyExpenses -
      (monthlyRent * (12 - emptyMonths) -
        monthlyRent * 12 * monthlyExpenses -
        homeMaintenance -
        30840) *
        0.15) /
    12
  );
};

//prepare an array of cashflow per year (income - expenses).
//Initial costs and property sale are inculded.
const prepareCashflow = (
  inputData,
  monthlyNetRevenue,
  monthlyMortgagePayment,
  investmentPeriod
) => {
  const cashflow = new Array(investmentPeriod);

  const initialInvestment =
    -inputData.initialMaintenance -
    (inputData.propertyCost - inputData.mortgageValue);

  const yearlyCashFlowMortgage =
    12 * (monthlyNetRevenue - monthlyMortgagePayment);

  const propertyValueIncreased =
    parseFloat(inputData.propertyCost) * (1 + inputData.valueDevelopment / 100);

  cashflow.fill(initialInvestment, 0, 1);
  cashflow.fill(yearlyCashFlowMortgage, 1, inputData.mortgagePeriod + 1);
  cashflow.fill(
    monthlyNetRevenue * 12,
    inputData.mortgagePeriod + 1,
    investmentPeriod
  );
  if (inputData.mortgagePeriod < investmentPeriod) {
    cashflow.push(propertyValueIncreased + 12 * monthlyNetRevenue);
  } else {
    cashflow.push(propertyValueIncreased + yearlyCashFlowMortgage);
  }

  return cashflow;
};

//compute net present value = a value of future money in today's perspective
const getNPV = (cashflow, irr) =>
  cashflow.reduce((acc, val, i) => acc + val / Math.pow(1 + irr, i), 0);

const computeIRR = (cashflow) => {
  const maxTries = 100000;
  const delta = 0.00001;
  let guess = 0.01; //Initial guess
  const multiplier = getNPV(cashflow, guess) > 0 ? 1 : -1;
  let i = 0;
  while (i < maxTries) {
    const guessedNPV = getNPV(cashflow, guess);
    if (multiplier * guessedNPV > delta) {
      guess += multiplier * delta;
      i += 1;
    } else break;
  }
  //console.log(`Found IRR = ${guess} in ${i} trials`);
  return guess;
};

//monthlyRent -> + 500, 5 rows -> -1000, - 500, x (bold), +500, +1000
//Compute yearly profit for various monthly rent and a given investment period.
const getRentInvestmentPeriodTable = (inputData, monthlyMortgagePayment) => {
  const table = {
    data: [],
    monthlyRent: [],
    investmentPeriod: [],
  };
  const investmentPeriodSet = new Set();
  const monthlyRentTop = parseInt(inputData.monthlyRent, 10) + 1000;
  for (
    let monthlyRent = parseInt(inputData.monthlyRent, 10) - 1000;
    monthlyRent <= monthlyRentTop;
    monthlyRent += 500
  ) {
    const row = [];
    table.monthlyRent.push(monthlyRent);
    const monthlyNetRevenue = computeMonthlyNetRevenue(inputData, monthlyRent);

    let investmentPeriod = parseInt(inputData.investmentPeriod, 10);
    const cashflow = prepareCashflow(
      inputData,
      monthlyNetRevenue,
      monthlyMortgagePayment,
      investmentPeriod
    );
    const irr = computeIRR(cashflow);

    row.push(Number(irr * 100).toFixed(2));
    investmentPeriodSet.add(inputData.investmentPeriod);

    table.data.push(row);
  }
  table.investmentPeriod = Array.from(investmentPeriodSet);

  return table;
};

export const roundResults = (resultsState) => {
  resultsState.monthlyMortgagePayment = Number(
    resultsState.monthlyMortgagePayment
  ).toFixed();
  resultsState.monthlyNetRevenue = Number(
    resultsState.monthlyNetRevenue
  ).toFixed();

  return resultsState;
};
