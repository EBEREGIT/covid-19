import React, { Component } from "react";
import { Jumbotron, Table } from "react-bootstrap/";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import Loading from "./Loading";
import Footer from "./Footer";

export default class GlobalReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://api.coronatracker.com/v3/stats/worldometer/global")
      .then(res => res.json())
      .then(json => {
        this.setState({
          report: json,
          isLoaded: true
        });
      })
      .catch(error => {
        this.setState({
          error
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
        <main>
          <Jumbotron>
            <h1>Global Report</h1>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Total</th>
                  <th>Figures</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Total Confirmed</td>
                  <td>
                    <NumberFormat
                      value={report.totalConfirmed}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Total Deaths</td>
                  <td>
                    <NumberFormat
                      value={report.totalDeaths}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Total Recovered</td>
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
                  <td>4</td>
                  <td>Total New Cases</td>
                  <td>
                    <NumberFormat
                      value={report.totalNewCases}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Total New Deaths</td>
                  <td>
                    <NumberFormat
                      value={report.totalNewDeaths}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Total Active Cases</td>
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
                  <td>7</td>
                  <td>Total Cases Per Million Population</td>
                  <td>
                    <NumberFormat
                      value={report.totalCasesPerMillionPop}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Last Updated</td>
                  <td>
                    <Moment>{report.created}</Moment>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Footer />
          </Jumbotron>
        </main>
      );
    }
  }
}
