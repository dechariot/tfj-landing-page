import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import theFool from "../img/tarot-card/theFool.jpg";
import riderWaite from "../img/tarot-card/riderWaite.jpg";

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
    minHeight: "72px",
  };
  const img = {
    width: "200px",
    height: "312px",
    marginBottom: "2rem"
  };
  //==========================CSS

  return (
    <div id="features" style={features}>
      <Container>
        <Container>
          <h2 style={featuresTitle}>MAIN FEATURES</h2>
        </Container>
        <Container>
          <Row>
            <Col sm="12" md="6">
              <h4 style={featuresHeading}>TODAY CARD</h4>
              <p style={featuresDesc}>
                Users can see their today card by clicking today's card in
                homepage and the y can read them again in reading history.
              </p>
              <img style={img} src={theFool} alt="The Fool"/>
            </Col>
            {/* ============= */}
            <Col sm="12" md="6">
              <h4 style={featuresHeading}>SEARCHING</h4>
              <p style={featuresDesc}>
                User can freely searching and see the information of cards by
                clicking to them.
              </p>
              <img style={img} src={riderWaite} alt="Rider Waite Tarot"/>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
