import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../img/avatar.jpg";

export default function About() {
  //CSS============================
  const about = {
    padding: "2rem 0 3rem 0",
    maxWidth: "700px",
    margin: "0 auto"
  };
  const aboutTitle = {
    paddingBottom: "1rem",
    fontWeight: "600",
    color: "#5804ff",
  };
  const aboutText = {
      fontWeight: "300",
      border: "2px solid black",
      borderRadius: "5px",
      padding: "1rem 0.5rem",
      maxWidth: "300px",
      margin: "0 auto",
  };
  const img = {
    width: "200px",
    borderRadius: "50%",
    padding: "0 0 2rem 0"
  };
  //============================CSS
  return (
    <div style={about}>
      <Container>
        <h2 style={aboutTitle}>ABOUT ME</h2>
      </Container>
      <Container>
        <Row>
          <Col lg="6" sm="12">
            <img style={img} src={avatar} alt="this is my avatar"></img>
          </Col>
          {/* ========================= */}
          <Col lg="6" sm="12" style={aboutText}>
          " Sang Nguyen is a person who are passionate with coding and learning code. He enjoys discovering new things in his journey to make up his life more colorful. "
          <hr></hr>
          <b>Nguyen Sang, Developer</b>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
