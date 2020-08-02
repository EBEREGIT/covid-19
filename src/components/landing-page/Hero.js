import React from "react";
import { Row, Col } from "react-bootstrap/";
import Map from "./Map.js";

export default function Hero() {
  return (
    <Row className="welcome">
      {/* hero and call to action */}
      <Col xs={12} sm={12} md={12} lg={5} className="hero">
        <h1>Corona Virus</h1>
        <p>Tracker</p>

        <a className="btn" href="/#world-section">View Statistics</a>
      </Col>

      {/* map image or background */}
      <Col xs={12} sm={12} md={12} lg={7}>
        <Map />
        <div id="world-section"></div>
      </Col>
    </Row>
  );
}
