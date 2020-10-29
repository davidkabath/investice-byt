import React from "react";
import { Table } from "react-bootstrap";
import ResultsTableHeader from "./ResultsTableHeader";
import ResultsTableBody from "./ResultsTableBody";
import ResultsTableDescription from "./ResultsTableDescription";

const ProspectTable = (props) => {
  const { rentInvestmentPeriodTable } = props.tablesData;

  return (
    <div>
      <Table responsive className="resultsTableDescription">
        <ResultsTableDescription isValueDevelopmentIncluded={true} />
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

export default ProspectTable;
