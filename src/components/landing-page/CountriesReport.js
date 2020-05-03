import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap/";

let items = [];

for (let index = 0; index < 10; index++) {
  items.push(
    <Col xs={12} sm={12} md={4} lg={4}>
      <table id="each-countries">
        <tr>
          <th>
            001<span>Company</span>
          </th>
        </tr>
        <tr>
          <td>
            Comfirm Today
            <br />
            <span style={{ color: "#0BC3D5" }}>537</span>
          </td>
        </tr>
        <tr>
          <td>
            Deaths Today
            <br />
            <span style={{ color: "#BB2626" }}>537</span>
          </td>
        </tr>
        <tr>
          <td>
            Active Cases
            <br />
            <span style={{ color: "#FF9900" }}>537</span>
          </td>
        </tr>
        <tr>
          <td>
            Total Recovered
            <br />
            <span style={{ color: "#27AA25" }}>537</span>
          </td>
        </tr>
        <tr>
          <td>
            Total Critical
            <br />
            <span style={{ color: "#333333" }}>537</span>
          </td>
        </tr>
        <tr>
          <td>
            Total Comfirmed
            <br />
            <span style={{ color: "#27AA25" }}>537</span>
          </td>
        </tr>
        <tr>
          <td>
            Total Deaths
            <br />
            <span style={{ color: "#BB2626" }}>537</span>
          </td>
        </tr>
        <tr>
          <td>
          Total Confirmed per million Population
            <br />
            <span style={{ color: "#0BC3D5" }}>537</span>
          </td>
        </tr>
      </table>
    </Col>
  );
}

export default function CountriesReport() {
  return (
    <Row className="countries-report">
      <Col xs={12} sm={12} md={12} lg={12}>
        <h2 className="text-center">Countries Report</h2>
      </Col>

      {/* filter form */}
      <Col xs={12} sm={12} md={12} lg={12}>
        {/* filter form */}
        <Form inline>
          <Form.Control as="select">
            <option>Select a Country</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <Button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </Button>
        </Form>
      </Col>

      {items}
    </Row>
  );
}
