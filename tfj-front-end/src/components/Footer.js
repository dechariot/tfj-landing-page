import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  //CSS=================================
  const footer = {
    backgroundColor: "#5804ff",
    color: "white",
    padding: "0.5rem",
  };
  const footerText = {
    margin: "0",
    fontWeight: "300",
  };
  //=================================CSS

  return (
    <div>
      <Container fluid style={footer}>
        <a style={footerText}>Features | Story | About | Contact</a>
        <br></br>
        <a style={footerText}>Ho Chi Minh City, Vietnam</a>
        <br></br>
        <a style={footerText}>
          &copy; Made with &hearts; by <b>dechariot</b>
        </a>
      </Container>
    </div>
  );
}
