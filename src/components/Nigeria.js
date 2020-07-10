import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import NumberFormat from "react-number-format";
import Loading from "./Loading";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import { fetchNigeria } from "../Redux/Action/newsAction";
import { connect } from "react-redux";

class Nigeria extends Component {
  // fetch states from API
  componentDidMount() {
    this.props.dispatch(fetchNigeria())
  }

  render() {
    let { reports, loading } = this.props;
    let nigeriaReports = reports.data;
    let stateReport = {};
    let totalNigeriaReport = {};
    let totalActive = 0;
    let counter = 1;
    let nigeriaStatesReport = [];

    // extract the states here
    for (let rep in nigeriaReports) {
      if (rep === "states") {
        // collect eact state report
        stateReport[rep] = nigeriaReports[rep];
      } else {
        // colloect total report on Nigeria
        totalNigeriaReport[rep] = nigeriaReports[rep];
      }
    }

    // convert the states report to an array
    let stateReports = Object.values(stateReport)[0];
    for (let states in stateReports){
      nigeriaStatesReport.push(stateReports[states])
    }

    // get total active
    for (let active in stateReports) {
      totalActive += stateReports[active].casesOnAdmission;
    }

    // display a loading message while reports are being fetched
    if (loading) {
      return (
        <div className="text-center">
          <Loading name="Nigeria" />
        </div>
      );
    } else {
      // display reports if they are ready
      return (
        <Container className="nigeria">
          {/* page title */}
          <PageTitle title="Nigeria" />

          <h2 className="text-center">Nigeria Report</h2>

          <Row>
            {/* summary */}
            <Col xs={12} sm={12} md={4} lg={4}>
              <table id="each-countries">
                <tr>
                  <th>
                    000
                    <span>Summary</span>
                  </th>
                </tr>

                {/* active cases */}
                <tr>
                  <td>
                    Active Cases
                    <br />
                    <span style={{ color: "#FF9900" }}>
                      <NumberFormat
                        value={totalActive}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>

                {/* recovered */}
                <tr>
                  <td>
                    Total Recovered
                    <br />
                    <span style={{ color: "#27AA25" }}>
                      <NumberFormat
                        value={totalNigeriaReport.discharged}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>

                {/* total comfirmed */}
                <tr>
                  <td>
                    Total Comfirmed
                    <br />
                    <span style={{ color: "#0BC3D5" }}>
                      <NumberFormat
                        value={totalNigeriaReport.totalConfirmedCases}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>

                {/* total deaths */}
                <tr>
                  <td>
                    Total Deaths
                    <br />
                    <span style={{ color: "#BB2626" }}>
                      <NumberFormat
                        value={totalNigeriaReport.death}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>

                {/* total tested */}
                <tr>
                  <td>
                    Total Tested
                    <br />
                    <span style={{ color: "#0BC3D5" }}>
                      <NumberFormat
                        value={totalNigeriaReport.totalSamplesTested}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>
              </table>
            </Col>

            {/* individual states */}
            {nigeriaStatesReport.map((report) => (
              <Col xs={12} sm={12} md={4} lg={4}>
                <table id="each-countries">
                  <tr>
                    <th>
                      00{counter++}
                      <span>{report.state}</span>
                    </th>
                  </tr>

                  {/* active cases */}
                  <tr>
                    <td>
                      Active Cases
                      <br />
                      <span style={{ color: "#FF9900" }}>
                        <NumberFormat
                          value={report.casesOnAdmission}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </span>
                    </td>
                  </tr>

                  {/* recovered */}
                  <tr>
                    <td>
                      Total Recovered
                      <br />
                      <span style={{ color: "#27AA25" }}>
                        <NumberFormat
                          value={report.discharged}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </span>
                    </td>
                  </tr>

                  {/* total comfirmed */}
                  <tr>
                    <td>
                      Total Comfirmed
                      <br />
                      <span style={{ color: "#0BC3D5" }}>
                        <NumberFormat
                          value={report.confirmedCases}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </span>
                    </td>
                  </tr>

                  {/* total deaths */}
                  <tr>
                    <td>
                      Total Deaths
                      <br />
                      <span style={{ color: "#BB2626" }}>
                        <NumberFormat
                          value={report.death}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </span>
                    </td>
                  </tr>

                  {/* Stay Safe Message */}
                  <tr>
                    <td style={{ color: "#BB2626", paddingTop: "4%" }}>
                      <p>Stay Safe and Updated</p>
                    </td>
                  </tr>
                </table>
              </Col>
            ))}
          </Row>

          <Footer />
        </Container>
      );
    }
  }
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.nigeria.loading,
  reports: state.nigeria.news,
  hasErrors: state.nigeria.hasErrors,
});

export default connect(mapStateToProps)(Nigeria)