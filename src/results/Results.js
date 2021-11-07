import React, { Component } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import ResultsTable from "./ResultsTable";

class Results extends Component {
  render() {
    const dataLoaded = Object.keys(this.props.results).length !== 0;

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
        </div>
      </Container>
    );
  }
}

export default Results;
