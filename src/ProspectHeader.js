import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useForm } from "react-hook-form";
import { InputGroup, Container, Form, Row, Col, Button } from "react-bootstrap";

const ProspectHeader = (props) => {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onSubmit", //"onBlur", //onChange / onSubmit
  });

  const onSubmit = (data) => {
    props.prospectOnSubmit(data.valueDevelopment / 100);
  };

  const integerPattern = /^-?[0-9]+$/;

  return (
    <div>
      <Container className="inputs">
        <div className="row justify-content-center">
          <Form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Nárust/pokles hodnoty nemovitosti za dobu investice v procentech
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    name="valueDevelopment"
                    ref={register({
                      required: true,
                      min: -100,
                      max: 100,
                      pattern: integerPattern,
                    })}
                    defaultValue=""
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>%</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.valueDevelopment ? (
                    <ErrorMessage text="-100 - 100 %" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>

            <div className="button-send">
              <Button
                variant="info"
                type="submit"
                disabled={formState.isSubmitting}
              >
                Vypočítat výhled
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ProspectHeader;
