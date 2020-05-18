import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Features() {
  //CSS==========================
  const features = {
    padding: "2rem 0",
    maxWidth: "700px",
    margin: "0 auto",
  };
  const featuresTitle = {
    fontWeight: "600",
    color: "#5804ff",
    paddingBottom: "0.5rem",
  };
  const featuresHeading = {
    fontWeight: "450",
    fontSize: "1.2rem",
  };
  const featuresDesc = {
    textAlign: "justify",
    fontWeight: "300",
  };
  //==========================CSS

  return (
    <div style={features}>
      <Container>
        <Container>
          <h2 style={featuresTitle}>MAIN FEATURES</h2>
        </Container>
        <Container>
          <Row>
            <Col>
              <h4 style={featuresHeading}>TODAY CARD</h4>
              <p style={featuresDesc}>
                Users can see their today card by clicking today's card in
                homepage and the y can read them again in reading history.
              </p>
            </Col>
            {/* ============= */}
            <Col>
              <h4 style={featuresHeading}>SEARCHING</h4>
              <p style={featuresDesc}>
                User can freely searching and see the information of cards by
                clicking to them.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
