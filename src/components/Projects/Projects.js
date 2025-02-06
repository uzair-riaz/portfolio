import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotten from "../../Assets/Projects/spotten.png";
import mach33 from "../../Assets/Projects/mach33.png";
import briefingsource from "../../Assets/Projects/briefingsource.webp";
import tune from "../../Assets/Projects/tune.png";
import careem from "../../Assets/Projects/careem.avif";
import tilly from "../../Assets/Projects/tilly.avif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotten}
              title="Spotten"
              description="Norway's new sharing platform for available space. Everything for your needs. Housing, storage and parking - and much more. With us you will find available space at market-leading prices."
              demoLink="https://spotten.no/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mach33}
              title="Mach33"
              description="The Space
Finance Group.
Financing Human Expansion through a comprehensive suite of financial products and services dedicated exclusively to space."
              demoLink="https://www.33fg.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={briefingsource}
              title="BriefingSource"
              description="BriefingSource is an all-in-one event management platform that eliminates manual processes and streamlines the planning and execution of all types of events. With essential features and seamless integrations, you can focus on what matters most— your clients."
              demoLink="https://briefingsource.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tune}
              title="TUNE"
              description="TUNE is the only affiliate marketing platform that gives marketers true flexibility and control of their data and partner program. Brands, agencies, and networks around the world use TUNE to manage, measure, pay, and grow their programs through direct partnerships and the TUNE Marketplace."
              demoLink="https://tune.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careem}
              title="Careem School Rides"
              description="School Rides, will help you say goodbye to running after your kids in the morning or struggling to arrange pickups and drop-offs."
              demoLink="https://www.careem.com/en-AE/school-rides/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tilly}
              title="Tilly Therapy"
              description="Life-changing care for autism. Give your child the best support with collaborative, personalized care to help them learn, grow, and reach new milestones."
              demoLink="https://tillytherapy.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
