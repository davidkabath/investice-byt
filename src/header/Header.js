import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="header">
      <div className="header-part1">Investiční nemovitost</div>
      <div className="header-part2">orientační kalkulačka</div>
    </Container>
  );
};

export default Header;
