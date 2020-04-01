import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap/";

export default class NavComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      country: ""
    };
  }

  handleChange(event){
    this.setState({
      country: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(event.target.value);
    // function to be created in the App component
    this.props.handleSearch(this.state);
  }

  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">
            <img
              src="https://res.cloudinary.com/dunksyqjj/image/upload/c_scale,h_50,w_200/v1585177612/LogoMakr_8jNJSD_wbujbu.png"
              alt="site-log"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                World
              </Nav.Link>
              <Nav.Link as={Link} to="/countries">
                Countries
              </Nav.Link>
              <Nav.Link as={Link} to="/trending">
                Trending
              </Nav.Link>
            </Nav>
            <Form inline onSubmit={this.handleSubmit.bind(this)} action="/search">
              <FormControl
                type="text"
                placeholder="Search a County"
                className="mr-sm-2"
                // name="country"
                onChange = {this.handleChange.bind(this)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
