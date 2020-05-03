import React from "react";
import { Container } from "react-bootstrap/";
import Hero from "./landing-page/Hero";
import WorldReport from "./landing-page/WorldReport";
import CountriesReport from "./landing-page/CountriesReport";
import Footer from "./Footer";


export default function LandingPage() {
  return (
    <Container className="landing-page">
      {/* Hero section */}
      <Hero />

      {/* World Report */}
      <WorldReport/>

      {/* Countries Report */}
      <CountriesReport/>

      {/* footer */}
      <Footer/>
      
    </Container>
  );
}
