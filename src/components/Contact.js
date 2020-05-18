import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  //CSS=======================
  const contact = {
    padding: "2rem 0",
    margin: "0 auto",
    maxWidth: "500px",
  };
  const contactTitle = {
    fontWeight: "600",
    paddingBottom: "0.5rem",
    color: "#5804ff",
  };
  const contactDesc = {
    fontWeight: "300",
  };
  const contactForm = {
    maxWidth: "500px",
    margin: "0 auto",
  };
  //=======================CSS
  return (
    <div style={contact}>
      <Container>
        <h2 style={contactTitle}>GET IN TOUCH</h2>
        <p style={contactDesc}>
          I would love to get any feedback of all you guys about my web app.
          Please feel free to fill your feed back below to help me improve my
          project. Thank for advanced!
        </p>
      </Container>
      {/* ========================= */}
      <Form style={contactForm}>
        <Container>
          <Form.Group style={{ textAlign: "left" }} controlId="formBasicText">
            <Form.Control
              style={{ height: "70px" }}
              type="text"
              placeholder="We would love to get your feedback"
            />
          </Form.Group>
        </Container>
        <Container>
          <Row>
            <Col>
              <Form.Group controlId="formBasicText">
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>
            </Col>

            <Col
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  height: "38px",
                  width: "150px",
                  backgroundColor: "#5804ff",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
