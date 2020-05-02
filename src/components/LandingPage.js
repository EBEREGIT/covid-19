import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import Hero from "./landing-page/Hero";
import TotalComfirmedCases from "./landing-page/world-report/TotalComfirmedCases";
import TotalActiveCases from "./landing-page/world-report/TotalActiveCases";
import TotalRecovery from "./landing-page/world-report/TotalRecovery";
import TotalDeaths from "./landing-page/world-report/TotalDeaths";

export default function LandingPage() {
  return (
    <Container className="landing-page">
      {/* Hero section */}
      <Hero />

      {/* World Report */}
      <Row className="world-report">
        {/* heading */}
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2 className="text-center">World Report</h2>
        </Col>

        {/* individual reports */}
        <Col xs={12} sm={12} md={8} lg={8}>
          <Row>
            {/* total confirm */}
            <TotalComfirmedCases />

            {/* total active cases */}
            <TotalActiveCases />

            {/* total recovery */}
            <TotalRecovery/>

            {/* total deaths */}
            <TotalDeaths/>
          </Row>
        </Col>

        {/* Total reports */}
        <Col xs={12} sm={12} md={4} lg={4} className="total-reports"></Col>
      </Row>
    </Container>
  );
}
