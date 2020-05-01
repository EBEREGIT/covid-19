import React, { Component, Fragment } from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap/";

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
    console.log(event.target.value);
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
              <Form.Group>
                <InputGroup>
                  {/* input */}
                  <FormControl
                    type="text"
                    placeholder="Search a County"
                    className="mr-sm-2"
                    onChange={this.handleChange.bind(this)}
                  />
                  <InputGroup.Prepend onClick={this.handleSubmit.bind(this)}>
                    <InputGroup.Text id="inputGroupPrepend">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
              </Form.Group>
            </Form>

            {/* nav links */}
            <Nav className="mr-auto">
              <Nav.Link href="/">World</Nav.Link>
              <Nav.Link href="/countries">Countries</Nav.Link>
              <Nav.Link href="/trending">Trending</Nav.Link>
              <Nav.Link href="/nigeria">Nigeria</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
