import React from "react";
import { Table } from "react-bootstrap";
import ResultsTableBody from "./ResultsTableBody";
import ResultsTableHeader from "./ResultsTableHeader";

const SummaryTable = (props) => {
  const { monthlyMortgagePayment, monthlyNetRevenue, mortgagePeriod } =
    props.tablesData;
  const mortgageRevenueDelta = monthlyMortgagePayment - monthlyNetRevenue;

  let descriptionsAndValues = [
    {
      description: "Čistý měsíční příjem z nájmu: ",
      value: monthlyNetRevenue + " Kč",
    },
  ];

  const descriptionsAndValuesOnlyMortgage = [
    {
      description: "Měsíční splátka hypotéky: ",
      value: monthlyMortgagePayment + " Kč po dobu " + mortgagePeriod + " let",
    },
    {
      description: "Měsíční doplatek na hypotéku: ",
      value: mortgageRevenueDelta + " Kč po dobu " + mortgagePeriod + " let",
    },
  ];

  if (mortgagePeriod !== 0) {
    descriptionsAndValues = descriptionsAndValues.concat(
      descriptionsAndValuesOnlyMortgage
    );
  }

  const rows = descriptionsAndValues.map((row, index) => {
    return (
      <tr key={index}>
        <td className="align-middle">{row.description}</td>
        <td className="align-middle">{row.value}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const ResultsTable = (props) => {
  const { rentInvestmentPeriodTable } = props.tablesData;

  return (
    <div>
      <Table responsive>
        <SummaryTable tablesData={props.tablesData} />
      </Table>
      <Table bordered striped hover responsive>
        <ResultsTableHeader
          headerData={rentInvestmentPeriodTable.investmentPeriod}
        />
        <ResultsTableBody
          tableData={rentInvestmentPeriodTable.data}
          monthlyRent={rentInvestmentPeriodTable.monthlyRent}
        />
      </Table>
    </div>
  );
};

export default ResultsTable;
