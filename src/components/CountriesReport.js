import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Jumbotron
} from "react-bootstrap/";
import NumberFormat from "react-number-format";
import Moment from "react-moment";
import Loading from "./Loading";
import Footer from "./Footer";

export default class countriesReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://api.coronatracker.com/v3/stats/worldometer/country")
      .then(res => res.json())
      .then(json => {
        this.setState({
          reports: json,
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
    let { reports, isLoaded } = this.state;

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
          <h1 className="text-center">Countries Report</h1>
            <Container>
              <Row>
                {reports.map(report => (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="text-center" bg="Light" variant="Light">
                      <Card.Header>
                        <h6>
                          {report.country} ({report.countryCode})
                        </h6>
                      </Card.Header>
                      <Card.Body>
                        <ListGroup variant="flush">

                          {/* total confirmed */}
                          <ListGroup.Item>
                            Total Confirmed:{" "}
                            <NumberFormat
                              value={report.totalConfirmed}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* total deaths */}
                          <ListGroup.Item>
                            Total Deaths:{" "}
                            <NumberFormat
                              value={report.totalDeaths}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* total recovered */}
                          <ListGroup.Item>
                            Total Recovered:{" "}
                            <NumberFormat
                              value={report.totalRecovered}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* total comfirmed */}
                          <ListGroup.Item>
                            Today's Confirmed:{" "}
                            <NumberFormat
                              value={report.dailyConfirmed}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* total deaths */}
                          <ListGroup.Item>
                            Today's Deaths:{" "}
                            <NumberFormat
                              value={report.dailyDeaths}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* active cases */}
                          <ListGroup.Item>
                            Active Cases:{" "}
                            <NumberFormat
                              value={report.activeCases}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* total critical */}
                          <ListGroup.Item>
                            Total Critical:{" "}
                            <NumberFormat
                              value={report.totalCritical}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* Total Confirmed Per Million Population */}
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

                      {/* last updated */}
                      <Card.Footer className="text-muted">
                        Last Updated:
                        <br />
                        <Moment>{report.lastUpdated}</Moment>
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
            <Footer />
          </Jumbotron>
        </main>
      );
    }
  }
}
