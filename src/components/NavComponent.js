import React, { Component, Fragment } from "react";
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
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <img
              src="https://res.cloudinary.com/dunksyqjj/image/upload/c_scale,h_50,w_200/v1585177612/LogoMakr_8jNJSD_wbujbu.png"
              alt="site-log"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">
                World
              </Nav.Link>
              <Nav.Link href="/countries">
                Countries
              </Nav.Link>
              <Nav.Link href="/trending">
                Trending
              </Nav.Link>
            </Nav>
            <Form inline onSubmit={this.handleSubmit.bind(this)} action="/search">
              <FormControl
                type="text"
                placeholder="Search a County"
                className="mr-sm-2"
                onChange = {this.handleChange.bind(this)}
              />
              <Button variant="outline-danger" onClick = {this.handleSubmit.bind(this)}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
