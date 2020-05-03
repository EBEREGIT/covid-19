import React from 'react'
import { Row, Col } from "react-bootstrap/";
import TotalComfirmedCases from "./world-report/TotalComfirmedCases";
import TotalActiveCases from "./world-report/TotalActiveCases";
import TotalRecovery from "./world-report/TotalRecovery";
import TotalDeaths from "./world-report/TotalDeaths";
import TotalReport from './world-report/TotalReport';

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
        <TotalReport/>
      </Row>
    )
}
