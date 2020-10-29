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
    <div>
      <Container fluid className="disclaimer-strip">
        <Alert.Link
          className="text-reset linkClass"
          href="#"
          onClick={() => setShowDisclaimer(!showDisclaimer)}
        >
          {showDisclaimer ? "Skrýt" : "Zobrazit"} vysvětlivky a popis výpočtu
        </Alert.Link>
      </Container>
      <Container className="inputs">
        <div className="row justify-content-center">
          {showDisclaimer ? (
            <Alert variant="danger" className="disclaimer-text">
              <Alert.Heading>Vysvětlivky</Alert.Heading>
              Nemovitost
              <ul>
                <li>
                  Vlastní investice (VI) - finance z vlastní kapsy. Součet
                  vlastní investice a výše hypotéky odpovídá ceně nemovitosti.
                </li>
                <li>
                  Počáteční investice (PI) - náklady na počáteční rekonstrukci
                  nemovitosti. Např. rekonstrukce kuchyně, koupelny nebo nová
                  podlaha.
                </li>
                <li>Měsíční nájem (MN) - nájemné požadované po nájemníkovi.</li>
                <li>
                  Měsíční výdaje v procentech k nájmu (MV) - měsíční výdaje na
                  daň z nemovitosti, pojištění nemovitosti, apod.
                </li>
                <li>
                  Počet měsíců v roce, kdy nebude nemovitost pronajata (PM) -
                  výpadek příjmů z nájmu v případě, kdy zůstává nemovitost
                  nepronajata. Např. při hledání nového nájemníka, apod.
                </li>
                <li>
                  Fond na interní opravy (ročně) (FO) - finance na opravy
                  nemovitosti během doby investice. Např. při rekonstrukci
                  kuchyně či jiných nezbytných opravách.
                </li>
              </ul>
              Hypotéka
              <ul>
                <li>
                  Výše (VH) - výše hypotéky. Součet výše hypotéky a vlastní
                  investice odpovídá ceně nemovitosti.
                </li>
                <li>Doba splácení v celých letech (DH) - délka hypotéky.</li>
                <li>Úrok p.a. (UH) - roční úrok hypotéky.</li>
              </ul>
              Výhled
              <ul>
                <li>
                  Nárust/pokles hodnoty nemovitosti za dobu investice v
                  procentech (HN) - úprava výpočtu výnosu investice o
                  spekulativní nárust či pokles hodnoty nemovitosti za dobu
                  investice.
                </li>
              </ul>
              <Alert.Heading>Popis výpočtu</Alert.Heading>
              <ul>
                <li>
                  Čistý měsíční příjem z nájmu (CM) = (MN x (12 - PM) - FO - MN
                  x (12 - PM) x MV - (MN x (12 - PM) - MN x (12 - PM) x MV - FO
                  - 24840) x 0.15) / 12; (0.15 = 15% = daň z příjmu; 12 = počet
                  měsíců v roce; 24840 Kč = sleva na dani na poplatníka (2020)).
                </li>
                <li>
                  Měsíční splátka hypotéky (MH) = VH x (1 + UH/12){" "}
                  <sup>DH x 12</sup> x ((UH/12) / ((1 + UH/12){" "}
                  <sup>DH x 12</sup> - 1)); (12 = počet měsíců v roce).
                </li>
                <li>
                  Měsíční doplatek na hypotéku = Měsíční splátka hypotéky -
                  Čistý měsíční příjem z nájmu.
                </li>
                <li>
                  Čistý výnos investice p.a. = ((CM x 12 x DI + (VH + VI) - MH x
                  12 x DH - PI - VI) / (MH x 12 x DH + PI + VI) / DI) x 100; (12
                  = počet měsíců v roce; DI = délka investice v letech)
                </li>
                <li>
                  Čistý výnos investice p.a. se započtením nárustu/poklesu
                  hodnoty investice = ((CM x 12 x DI + (VH + VI) x (1 + HN) - MH
                  x 12 x DH - PI - VI) / (MH x 12 x DH + PI + VI) / DI) x 100;
                  (12 = počet měsíců v roce; DI = délka investice v letech)
                </li>
              </ul>
            </Alert>
          ) : (
            ""
          )}
          ;
          <Form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="inputForm-header">
              <h4>Nemovitost</h4>
            </div>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Vlastní investice
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={defaultInput.propertyInvestment}
                    name="propertyInvestment"
                    ref={register({
                      required: true,
                      min: 100000,
                      max: 20000000,
                      pattern: integerPattern,
                    })}
                    defaultValue={
                      useDefaultInput ? defaultInput.propertyInvestment : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>Kč</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.propertyInvestment ? (
                    <ErrorMessage text="100 000 - 20 000 000 Kč" />
                  ) : (
                    ""
                  )}
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={8}>
                Počáteční investice
              </Form.Label>
              <Col sm={4}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder={defaultInput.initialMaintenence}
                    name="initialMaintenence"
                    ref={register({
                      required: true,
                      min: 0,
                      max: 2000000,
                      pattern: integerPattern,
                    })}
                    defaultValue={
                      useDefaultInput ? defaultInput.initialMaintenence : ""
                    }
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>Kč</InputGroup.Text>
                  </InputGroup.Append>
                  {errors.initialMaintenence ? (
                    <ErrorMessage text="0 - 2 000 000 Kč" />
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
                      max: 20000000,
                      pattern: integerPattern,
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
                    <ErrorMessage text="100 000 - 20 000 000 Kč" />
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
                    min: 2,
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
                  <ErrorMessage text="2 - 35 let" />
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
    </div>
  );
};

export default InputForm;
