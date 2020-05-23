import React, { Component } from "react";
import { Row, Col, Button, Form } from "react-bootstrap/";
import Loading from "../Loading";
import NumberFormat from "react-number-format";

export default class CountriesReport extends Component {
  constructor(props) {
    super(props);

    // initial start
    this.state = {
      reports: [],
      isLoaded: false,
    };
  }

  // API call
  componentDidMount() {
    fetch("https://api.coronatracker.com/v3/stats/worldometer/country")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          reports: json,
          isLoaded: true,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  render() {
    let { reports, isLoaded } = this.state;
    let counter = 1;

    // show loading while data is being fetched
    if (!isLoaded) {
      return (
        <div className="text-center">
          <Loading name="All Countries" />
        </div>
      );
    } else {
      // data from API
      return (
        <Row className="countries-report" id="countries-section">
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

          {reports.map((report) => (
            <Col xs={12} sm={12} md={4} lg={4} className="each-country">
              <table>
                <tr>
                  <th>
                    00{counter++}
                    <span>
                      {report.country} ({report.countryCode})
                    </span>
                  </th>
                </tr>
                <tr>
                  <td>
                    Comfirm Today
                    <br />
                    <span style={{ color: "#0BC3D5" }}>
                      <NumberFormat
                        value={report.dailyConfirmed}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Deaths Today
                    <br />
                    <span style={{ color: "#BB2626" }}>
                      <NumberFormat
                        value={report.dailyDeaths}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Active Cases
                    <br />
                    <span style={{ color: "#FF9900" }}>
                      <NumberFormat
                        value={report.activeCases}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Total Recovered
                    <br />
                    <span style={{ color: "#27AA25" }}>
                      <NumberFormat
                        value={report.totalRecovered}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Total Critical
                    <br />
                    <span style={{ color: "#333333" }}>
                      <NumberFormat
                        value={report.totalCritical}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Total Comfirmed
                    <br />
                    <span style={{ color: "#27AA25" }}>
                      <NumberFormat
                        value={report.totalConfirmed}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Total Deaths
                    <br />
                    <span style={{ color: "#BB2626" }}>
                      <NumberFormat
                        value={report.totalDeaths}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    Total Confirmed per million Population
                    <br />
                    <span style={{ color: "#0BC3D5" }}>
                      <NumberFormat
                        value={report.totalConfirmedPerMillionPopulation}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />
                    </span>
                  </td>
                </tr>
              </table>
            </Col>
          ))}
        </Row>
      );
    }
  }
}
