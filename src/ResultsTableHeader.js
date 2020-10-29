import React from "react";

const ResultsTableHeader = (props) => {
  const header = props.headerData.map((row, index) => {
    return <th key={index}>{row}</th>;
  });

  return (
    <thead>
      <tr className="table-cell-center align-middle table-cell-bold">
        <th />
        {header}
      </tr>
    </thead>
  );
};

export default ResultsTableHeader;
