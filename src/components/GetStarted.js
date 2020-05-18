import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function GetStarted() {
  //CSS====================
  const getStarted = {
    backgroundColor: "#5804ff",
    padding: "3rem",
  };
  const getStartedTitle = {
    color: "white",
    fontWeight: "600",
  };
  const getStartedDesc = {
    color: "white",
    fontWeight: "300",
    maxWidth: "700px",
    margin: "0 auto",
  };
  //====================CSS

  return (
    <div id="get-started" style={getStarted}>
      <Container>
        <Row>
          <Col>
            <h2 style={getStartedTitle}>THE FOOL JOURNEY</h2>
            <p style={getStartedDesc}>The Fool Journey is a simple tarot website app for tarot lovers. This website uses Rider Waite Tarot to reference. It has some features for users can easily to check the cards information for learning purpose and read their daily cards.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
