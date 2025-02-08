import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <a href={props.demoLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <Card className="project-card-view" style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}
export default ProjectCards;
