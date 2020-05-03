import React, { Component } from "react";
import NumberFormat from "react-number-format";
import { Row, Col, Table, Button } from "react-bootstrap/";
import Loading from "../../Loading";

export default class TotalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: [],
      isLoaded: false,
    };
  }

  // call API
  componentDidMount() {
    fetch("https://api.coronatracker.com/v3/stats/worldometer/global")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          report: json,
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
    let { report, isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div className="text-center">
          <Loading />
        </div>
      );
    } else {
      return (
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

            <h3>
              <NumberFormat
                value={report.totalConfirmed}
                displayType={"text"}
                thousandSeparator={true}
                prefix={""}
              />
            </h3>
          </Col>

          {/* world report */}
          <Table responsive>
            <tbody>
              <tr>
                <td id="active-cases">
                  <li>Active Cases</li>
                </td>
                <td>
                  <NumberFormat
                    value={report.totalActiveCases}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={""}
                  />
                </td>
              </tr>
              <tr>
                <td id="recovered">
                  <li>Recovered</li>
                </td>
                <td>
                  <NumberFormat
                    value={report.totalRecovered}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={""}
                  />
                </td>
              </tr>
              <tr>
                <td id="deaths">
                  <li>Deaths</li>
                </td>
                <td>
                  <NumberFormat
                    value={report.totalDeaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={""}
                  />
                </td>
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
      );
    }
  }
}
