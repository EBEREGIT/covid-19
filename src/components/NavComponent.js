import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap/";

export default function NavComponent() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="https://res.cloudinary.com/dunksyqjj/image/upload/c_scale,h_50,w_250/v1585177612/LogoMakr_8jNJSD_wbujbu.png"
            alt="site-log"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">World</Nav.Link>
            <Nav.Link href="/countries">Countries</Nav.Link>
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
