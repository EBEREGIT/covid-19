import React from "react";
import { Nav } from "react-bootstrap/";

export default function NavComponent() {
  return (
    <header>
      <img
        src="https://res.cloudinary.com/dunksyqjj/image/upload/c_scale,h_70,w_250/v1585177612/LogoMakr_8jNJSD_wbujbu.png"
        alt="site-log"
      />
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Global Report</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Countries</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Health Care Institutions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Prevention</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
