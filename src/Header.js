import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Container fluid className="header">
        <div className="header-part1">Investiční nemovitost</div>
        <div className="header-part2">orientační kalkulačka</div>
      </Container>
    );
  }
}

export default Header;
