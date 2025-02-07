import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Experience from "./Experience";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Experience />
      </Container>
    </div>
  );
}

export default ResumeNew;
