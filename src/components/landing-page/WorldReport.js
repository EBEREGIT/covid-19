import React from 'react'
import { Row, Col, Table, Button } from "react-bootstrap/";
import TotalComfirmedCases from "./world-report/TotalComfirmedCases";
import TotalActiveCases from "./world-report/TotalActiveCases";
import TotalRecovery from "./world-report/TotalRecovery";
import TotalDeaths from "./world-report/TotalDeaths";

export default function WorldReport() {
    return (
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
            <TotalRecovery />

            {/* total deaths */}
            <TotalDeaths />
          </Row>
        </Col>

        {/* Total reports */}
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="chart-container total-report"
        >
          <Col xs={12} sm={12} md={12} lg={12}>
            <h5>Covid-19 Statistics</h5>
            <p>Total Confirmed Corona Cases</p>

            <h3>2,266,755</h3>
          </Col>

          {/* world report */}
          <Table responsive>
            <tbody>
              <tr>
                <td id="active-cases"><li>Active Cases</li></td>
                <td>1,529,815</td>
              </tr>
              <tr>
                <td id="recovered"><li>Recovered</li></td>
                <td>581,878</td>
              </tr>
              <tr>
                <td id="deaths"><li>Deaths</li></td>
                <td>155,062</td>
              </tr>
            </tbody>
          </Table>

          <hr />

          {/* Countries Summary */}
          <Table responsive>
            <tbody>
              <tr>
                <td>China</td>
                <td>81,027</td>
              </tr>
              <tr>
                <td>Italy</td>
                <td>51,097</td>
              </tr>
              <tr>
                <td>USA</td>
                <td>19,000</td>
              </tr>
            </tbody>
          </Table>

          <Row id="btn-see-all">
          <Button className="text-center">See All Countries</Button>
          </Row>
        </Col>
      </Row>
    )
}
