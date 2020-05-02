import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap/";
import Hero from "./landing-page/Hero";
import WorldReport from "./landing-page/WorldReport";


export default function LandingPage() {
  return (
    <Container className="landing-page">
      {/* Hero section */}
      <Hero />

      {/* World Report */}
      <WorldReport/>

      {/* Countries Report */}
      
    </Container>
  );
}
