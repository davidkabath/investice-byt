import React from "react";
import { Form } from "react-bootstrap";

const ErrorMessage = (props) => {
  return (
    <Form.Control.Feedback className="custom-control" type="invalid">
      {props.text}
    </Form.Control.Feedback>
  );
};

export default ErrorMessage;
