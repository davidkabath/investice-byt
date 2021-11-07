import React from "react";

const ResultsTableRow = (props) => {
  const row = props.rowData.map((item, index) => {
    return (
      <td key={index} className={"align-middle"}>
        {item}%
      </td>
    );
  });
  return (
    <tr
      key={props.monthlyRent}
      className={"table-cell-center " + (props.bold ? " table-cell-bold" : "")}
    >
      <td className={"table-cell-center align-middle"}>
        {props.monthlyRent}&nbsp;Kč
      </td>
      {row}
    </tr>
  );
};

const ResultsTableBody = (props) => {
  const rows = props.tableData.map((row, index) => {
    return (
      <ResultsTableRow
        key={props.monthlyRent[index]}
        rowData={row}
        monthlyRent={props.monthlyRent[index]}
        bold={index === 2 ? true : false}
      />
    );
  });

  return <tbody>{rows}</tbody>;
};

export default ResultsTableBody;
