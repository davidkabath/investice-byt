import React, { Component } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import ResultsTable from "./ResultsTable";
import ProspectTable from "./ProspectTable";
import ProspectHeader from "./ProspectHeader";

class Results extends Component {
  render() {
    const dataLoaded = Object.keys(this.props.results).length !== 0;
    const prospectDataLoaded =
      Object.keys(this.props.resultsProspect).length !== 0;

    return (
      <Container className="results" ref={this.tableRef}>
        <div className="justify-content-center">
          <Accordion
            className="resultsCard"
            activeKey={dataLoaded ? "result" : ""}
          >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="result">
                <b>Výsledek</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="result">
                <Card.Body>
                  {dataLoaded ? (
                    <ResultsTable tablesData={this.props.results} />
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion
            className="resultsCard"
            activeKey={dataLoaded ? "prospect" : ""}
          >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="prospect">
                <b>Výhled</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="prospect">
                <Card.Body>
                  {dataLoaded ? (
                    <div>
                      <ProspectHeader
                        prospectOnSubmit={this.props.prospectOnSubmit}
                      />
                      {prospectDataLoaded ? (
                        <ProspectTable
                          tablesData={this.props.resultsProspect}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Container>
    );
  }
}

export default Results;
