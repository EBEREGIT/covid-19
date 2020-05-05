import React from "react";
import { Row, Col, Container } from "react-bootstrap/";
import Map from "./landing-page/Map.js";
import AllNews from "./news/AllNews.js";
import Footer from "./Footer.js";

export default function News() {
  return (
    <Container>
      {/* Title */}
      <Row className="trending-news">
        <Col xs={12} sm={12} md={12} lg={12} className="news">
          <h1>News</h1>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className="news-map">
          <Map />
        </Col>
      </Row>

      {/* All News */}
      <AllNews />

      {/* footer */}
      <Footer/>
    </Container>
  );
}
