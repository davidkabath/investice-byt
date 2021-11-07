import React from "react";
import { CaretDownFill, CaretRightFill } from "react-bootstrap-icons";

const ResultsTableDescription = (props) => {
  return (
    <tbody>
      <tr>
        <td>
          <b>Čistý výnos investice p.a.:</b>
          {props.isValueDevelopmentIncluded
            ? " (se započtením změny hodnoty investice)"
            : ""}

          <br />
          <div className="d-none d-sm-block">
            Měsíční nájem {<CaretDownFill className="align-text-middle" />} /
            Délka investice v letech{" "}
            {<CaretRightFill className="align-text-middle" />}
          </div>
          <div className="d-sm-none d-block">
            Délka investice v letech{" "}
            {<CaretRightFill className="align-text-middle" />}
            <br /> Měsíční nájem{" "}
            {<CaretDownFill className="align-text-middle" />}
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ResultsTableDescription;
