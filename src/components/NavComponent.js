import React, { Component, Fragment } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap/";

export default class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
    };
  }

  handleChange(event) {
    this.setState({
      country: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // function to be created in the App component
    this.props.handleSearch(this.state);
  }

  render() {
    return (
      <Fragment>
        <Navbar expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <h3>C-19 Tracker</h3>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* search form */}
            <Form
              inline
              onSubmit={this.handleSubmit.bind(this)}
              action="/search"
            >
              <FormControl
                type="text"
                placeholder="Search a County"
                onChange={this.handleChange.bind(this)}
              />
              <Button
                onClick={this.handleSubmit.bind(this)}
              >
               <i className="fa fa-search" aria-hidden="true"></i> 
              </Button>
            </Form>

            {/* nav links */}
            <Nav className="mr-auto">
              <Nav.Link href="/#world-section">World</Nav.Link>
              <Nav.Link href="/#countries-section">Countries</Nav.Link>
              <Nav.Link href="/news">Trending</Nav.Link>
              <Nav.Link href="/nigeria">Nigeria</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
