import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap/";

export default function NavComponent() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="https://res.cloudinary.com/dunksyqjj/image/upload/c_scale,h_50,w_200/v1585177612/LogoMakr_8jNJSD_wbujbu.png"
            alt="site-log"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">World</Nav.Link>
            <Nav.Link as={Link} to="/countries">Countries</Nav.Link>
            <Nav.Link as={Link} to="/trending">Trending</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
