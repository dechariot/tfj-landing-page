import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import backgroundLogin from "../img/background/backgroundLogin.jpeg";

export default function LoginPage() {
  //CSS======================
  const loginPage = {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${backgroundLogin})`,
    backgroundSize: "cover",
    padding: "1rem",
  };
  const form = {
    padding: "2rem 10px",
    maxWidth: "300px",
    margin: "0 auto",
    borderRadius: "10px",
    backgroundColor: "white",
  };
  const button = {
    minWidth: "280px",
    margin: "0.5rem 0",
  };
  const FacebookButton = {
    backgroundColor: "#4267B2",
    minWidth: "280px",
  };
  //CSS======================
  return (
    <Container style={loginPage}>
      <Form style={form}>
      <h3>Login</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <>
          <Button style={button} variant="danger">
            Login with Google Account
          </Button>
          <Button style={FacebookButton} > Login with Facebook Account </Button>
          <Button style={button} variant="primary" type="submit">
            Submit
          </Button>
        </>
      </Form>
    </Container>
  );
}
