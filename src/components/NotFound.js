import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "./Footer";

export default function NotFound() {
  return (
    <Container className="d-flex justify-content-center align-items-center text-center">
      <Row >
        <Col xs={12} sm={12} md={12} lg={12} id="not-found">
          <h1 className="text-danger">404</h1>
          <h4>Page Not Found</h4>
          <p>Ensure you entered the right URL</p>
          <a href="/">Return Home</a>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
