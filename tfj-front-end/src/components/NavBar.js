import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  //CSS======================
  const navItems = {
    color: "white",
  };
  //CSS======================
  return (
    <div>
      <Navbar style={{ background: "#5804ff" }} variant="dark" expand="md">
        <Navbar.Brand href={"/"}>The Fool Journey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link className="mr-auto"></Nav.Link>
          <Nav inline>
            <Nav.Link style={navItems} href="#features">
              Features
            </Nav.Link>
            <Nav.Link style={navItems} href="#my-story">
              Story
            </Nav.Link>
            <Nav.Link style={navItems} href="#about-me">
              About
            </Nav.Link>
            <Nav.Link style={navItems} href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link>
              <Link style={navItems} to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={navItems} to="/signup">Sign Up</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
