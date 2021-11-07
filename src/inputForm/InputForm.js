import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  InputGroup,
  Container,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";
import Legend from "./Legend";

const InputForm = (props) => {
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    getValues,
    errors,
    clearErrors,
  } = useForm({
    mode: "onSubmit", //"onBlur", //onChange / onSubmit
  });
  const mortgageEnabled = props.mortgageEnabled;
  const useDefaultInput = props.useDefaultFormInput;
  const defaultInput = props.defaultFormInput;

  const [mortgageValues, saveMortgageValues] = useState();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const toggleMortgage = (event) => {
    if (!event.target.checked) {
      saveMortgageValues(
        getValues(["mortgageValue", "mortgagePeriod", "mortgageInterest"])
      );

      clearErrors(["mortgageValue", "mortgagePeriod", "mortgageInterest"]);
      setValue("mortgageValue", "");
      setValue("mortgagePeriod", "");
      setValue("mortgageInterest", "");
    } else {
      setValue("mortgageValue", mortgageValues.mortgageValue);
      setValue("mortgagePeriod", mortgageValues.mortgagePeriod);
      setValue("mortgageInterest", mortgageValues.mortgageInterest);
    }
    props.toggleMortgage(event);
  };

  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  const integerPattern = /^[0-9]*$/;
  const decimalPattern = /^[0-9]*.?[0-9]*$/;

  return (
    <Container fluid>
      <Alert className="disclaimer-strip">
        <Alert.Link
          className="text-reset linkClass"
          href="#"
          onClick={() => setShowDisclaimer(!showDisclaimer)}
        >
          {showDisclaimer ? "Skrýt" : "Zobrazit"} vysvětlivky a popis výpočtu
        </Alert.Link>
      </Alert>
      <Container className="inputs">
        <div className="row justify-content-center">
          {showDisclaimer && <Legend />};
          <Form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="inputForm-header">
              <h4>Investice</h4>
            </div>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Délka investice v celých letech
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={defaultInput.investmentPeriod}
                    name="investmentPeriod"
                    ref={register({
                      required: true,
                      min: 5,
                      max: 50,
                      pattern: integerPattern,
                      validate: (value) => {
                        return value >= getValues()["mortgagePeriod"];
                      },
                    })}
                    defaultValue={
                      useDefaultInput ? defaultInput.investmentPeriod : ""
                    }
                  />
                  {errors.investmentPeriod ? (
                    <ErrorMessage text="5 - 50 let a >= délka hypotéky" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>
            <div className="inputForm-header">
              <h4>Nemovitost</h4>
            </div>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Cena nemovitosti
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={defaultInput.propertyCost}
                    name="propertyCost"
                    ref={register({
                      required: true,
                      min: 100000,
                      max: 50000000,
                      pattern: integerPattern,
                    })}
                    defaultValue={
                      useDefaultInput ? defaultInput.propertyCost : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>Kč</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.propertyCost ? (
                    <ErrorMessage text="100 000 - 50 000 000 Kč" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Cena počáteční rekonstrukce
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={defaultInput.initialMaintenance}
                    name="initialMaintenance"
                    ref={register({
                      required: true,
                      min: 0,
                      max: 5000000,
                      pattern: integerPattern,
                    })}
                    defaultValue={
                      useDefaultInput ? defaultInput.initialMaintenance : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>Kč</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.initialMaintenance ? (
                    <ErrorMessage text="0 - 5 000 000 Kč" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Měsíční nájem
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={defaultInput.monthlyRent}
                    name="monthlyRent"
                    ref={register({
                      required: true,
                      min: 1000,
                      max: 100000,
                      pattern: integerPattern,
                    })}
                    defaultValue={
                      useDefaultInput ? defaultInput.monthlyRent : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>Kč</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.monthlyRent ? (
                    <ErrorMessage text="1000 - 100 000 Kč" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Měsíční výdaje v procentech k nájmu
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={defaultInput.monthlyExpenses}
                    name="monthlyExpenses"
                    ref={register({
                      required: true,
                      min: 0,
                      max: 30,
                      pattern: integerPattern,
                    })}
                    defaultValue={
                      useDefaultInput ? defaultInput.monthlyExpenses : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>%</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.monthlyExpenses ? (
                    <ErrorMessage text="0 - 30 %" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Počet měsíců v roce, kdy nebude nemovitost pronajata
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="number"
                  placeholder={defaultInput.emptyMonths}
                  name="emptyMonths"
                  ref={register({
                    required: true,
                    min: 0,
                    max: 6,
                    maxLength: 4,
                    pattern: decimalPattern,
                  })}
                  defaultValue={useDefaultInput ? defaultInput.emptyMonths : ""}
                />
                {errors.emptyMonths ? <ErrorMessage text="0.00 - 6.00" /> : ""}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Fond na interní opravy (ročně)
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={defaultInput.homeMaintenance}
                    name="homeMaintenance"
                    ref={register({
                      required: true,
                      min: 0,
                      max: 50000,
                      pattern: integerPattern,
                    })}
                    defaultValue={
                      useDefaultInput ? defaultInput.homeMaintenance : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>Kč</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.homeMaintenance ? (
                    <ErrorMessage text="0 - 50 000 Kč" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Nárust/pokles hodnoty nemovitosti za dobu investice v procentech
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={defaultInput.valueDevelopment}
                    name="valueDevelopment"
                    ref={register({
                      required: true,
                      min: -100,
                      max: 200,
                      pattern: integerPattern,
                    })}
                    defaultValue={
                      useDefaultInput ? defaultInput.valueDevelopment : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>%</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.valueDevelopment ? (
                    <ErrorMessage text="-100 - 200 %" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>
            <div className="inputForm-header">
              <h4>
                Hypotéka{" "}
                <Form.Check
                  inline
                  type="checkbox"
                  name="mortgage"
                  checked={mortgageEnabled}
                  ref={register}
                  onChange={toggleMortgage}
                />
              </h4>
            </div>

            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Výše
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={
                      mortgageEnabled ? defaultInput.mortgageValue : ""
                    }
                    name="mortgageValue"
                    ref={register({
                      required: mortgageEnabled,
                      min: 100000,
                      max: 50000000,
                      pattern: integerPattern,
                      validate: (value) => {
                        return value <= getValues()["propertyCost"];
                      },
                    })}
                    disabled={!mortgageEnabled}
                    defaultValue={
                      useDefaultInput ? defaultInput.mortgageValue : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>Kč</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.mortgageValue && mortgageEnabled ? (
                    <ErrorMessage text="100 000 - 50 000 000 Kč a <= cena nemovitosti" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Doba splácení v celých letech
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="number"
                  placeholder={
                    mortgageEnabled ? defaultInput.mortgagePeriod : ""
                  }
                  name="mortgagePeriod"
                  ref={register({
                    required: mortgageEnabled,
                    min: 5,
                    max: 35,
                    pattern: integerPattern,
                  })}
                  readOnly={!mortgageEnabled}
                  disabled={!mortgageEnabled}
                  defaultValue={
                    useDefaultInput ? defaultInput.mortgagePeriod : ""
                  }
                />
                {errors.mortgagePeriod && mortgageEnabled ? (
                  <ErrorMessage text="5 - 35 let" />
                ) : (
                  ""
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Úrok p.a.
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={
                      mortgageEnabled ? defaultInput.mortgageInterest : ""
                    }
                    name="mortgageInterest"
                    ref={register({
                      required: mortgageEnabled,
                      min: 0.1,
                      max: 10,
                      maxLength: 4,
                      pattern: decimalPattern,
                    })}
                    readOnly={!mortgageEnabled}
                    disabled={!mortgageEnabled}
                    defaultValue={
                      useDefaultInput ? defaultInput.mortgageInterest : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>%</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.mortgageInterest && mortgageEnabled ? (
                    <ErrorMessage text="0.10 - 10.00 %" />
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
                Vypočítat
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </Container>
  );
};

export default InputForm;
