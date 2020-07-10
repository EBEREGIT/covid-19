import React, { Component } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import Nigeria from "./components/Nigeria";
import { capitalize } from "./components/Helper";
import { Col, Card, ListGroup } from "react-bootstrap/";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import LandingPage from "./components/LandingPage";
import News from "./components/News";
import NotFound from "./components/NotFound";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "country",
      isLoaded: false,
      reports: [],
    };

    capitalize(this.state.country);
  }

  handleSearchData(stateData) {
    this.setState({
      ...stateData,
    });
  }

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
    const { country, reports } = this.state;
    let coutrySanitized = country.trim();

    // return error if the search field is empty
    if (coutrySanitized === "") {
      return (
        <div className="text-center">
          <NavComponent handleSearch={this.handleSearchData.bind(this)} />
          <h4 className="text-danger">Enter Valid Country</h4>
        </div>
      );
    } else {
      return (
        <div className="app">
          <NavComponent handleSearch={this.handleSearchData.bind(this)} />
          {reports.map((report) =>
            report.country === coutrySanitized.toUpperCase() ||
            report.country === coutrySanitized.toLowerCase() ||
            report.country === capitalize(coutrySanitized) ? (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="text-center" bg="Light" variant="Light">
                  <Card.Header>
                    <h6>
                      {report.country} ({report.countryCode})
                    </h6>
                  </Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Total Confirmed:{" "}
                        <NumberFormat
                          value={report.totalConfirmed}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Total Deaths:{" "}
                        <NumberFormat
                          value={report.totalDeaths}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Total Recovered:{" "}
                        <NumberFormat
                          value={report.totalRecovered}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Today's Confirmed:{" "}
                        <NumberFormat
                          value={report.dailyConfirmed}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Today's Deaths:{" "}
                        <NumberFormat
                          value={report.dailyDeaths}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Active Cases:{" "}
                        <NumberFormat
                          value={report.activeCases}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Total Critical:{" "}
                        <NumberFormat
                          value={report.totalCritical}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Total Confirmed Per Million Population:
                        <br />
                        <NumberFormat
                          value={report.totalConfirmedPerMillionPopulation}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={""}
                        />
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Last Updated:
                    <br />
                    <Moment>{report.lastUpdated}</Moment>
                  </Card.Footer>
                </Card>
              </Col>
            ) : (
              ""
            )
          )}

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/nigeria" component={Nigeria} />
            <Route path="/news" component={News} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      );
    }
  }
}
