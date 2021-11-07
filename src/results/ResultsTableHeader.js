import React from "react";

const ResultsTableHeader = (props) => {
  return (
    <thead>
      <tr className="table-cell-center align-middle table-cell-bold">
        <th className="result-table-header">Měsíční nájem</th>
        <th className="result-table-header">Čistý výnos investice p.a.</th>
      </tr>
    </thead>
  );
};

export default ResultsTableHeader;
