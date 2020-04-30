import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Jumbotron,
} from "react-bootstrap/";
import NumberFormat from "react-number-format";
import Loading from "./Loading";
import Footer from "./Footer";

export default class Nigeria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://covidnigeria.herokuapp.com/api")
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
    let nigeriaReports = reports.data;
    let stateReport = {};
    let totalNigeriaReport = {};
    let totalActive = 0;

    // extract the states here
    for (let rep in nigeriaReports) {
      if (rep === "states") {
        stateReport[rep] = nigeriaReports[rep];
      } else {
        totalNigeriaReport[rep] = nigeriaReports[rep];
      }
    }

    let stateReports = Object.values(stateReport)[0];

    // get total active
    for (let active in stateReports){
        totalActive += stateReports[active].casesOnAdmission;
    }

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
            <h1 className="text-center">Nigeria Report</h1>
            <Container>
              <Row>
                {/* summary */}
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card className="text-center" bg="Light" variant="Light">
                    <Card.Header>
                      <h6>Summary</h6>
                    </Card.Header>
                    <Card.Body>
                      <ListGroup variant="flush">
                        {/* total confirmed */}
                        <ListGroup.Item>
                          Total Confirmed:{" "}
                          <NumberFormat
                            value={totalNigeriaReport.totalConfirmedCases}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </ListGroup.Item>

                        {/* total deaths */}
                        <ListGroup.Item>
                          Total Deaths:{" "}
                          <NumberFormat
                            value={totalNigeriaReport.death}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </ListGroup.Item>

                        {/* total discharged */}
                        <ListGroup.Item>
                          Total Discharged:{" "}
                          <NumberFormat
                            value={totalNigeriaReport.discharged}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </ListGroup.Item>

                        {/* active cases */}
                        <ListGroup.Item>
                          Active Cases:{" "}
                          <NumberFormat
                            value={totalActive}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </ListGroup.Item>

                        {/* total tested */}
                        <ListGroup.Item>
                          Total Tested:{" "}
                          <NumberFormat
                            value={totalNigeriaReport.totalSamplesTested}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>

                    {/* last updated */}
                    <Card.Footer className="text-muted">
                      <p className="text-danger">Stay Safe and Updated</p>
                    </Card.Footer>
                  </Card>
                </Col>

                {/* individual states */}
                {stateReports.map((report) => (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="text-center" bg="Light" variant="Light">
                      <Card.Header>
                        <h6>{report.state}</h6>
                      </Card.Header>
                      <Card.Body>
                        <ListGroup variant="flush">
                          {/* total confirmed */}
                          <ListGroup.Item>
                            Total Confirmed:{" "}
                            <NumberFormat
                              value={report.confirmedCases}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* total deaths */}
                          <ListGroup.Item>
                            Total Deaths:{" "}
                            <NumberFormat
                              value={report.death}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* total discharged */}
                          <ListGroup.Item>
                            Total Discharged:{" "}
                            <NumberFormat
                              value={report.discharged}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>

                          {/* active cases */}
                          <ListGroup.Item>
                            Active Cases:{" "}
                            <NumberFormat
                              value={report.casesOnAdmission}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>

                      {/* last updated */}
                      <Card.Footer className="text-muted">
                        <p className="text-danger">Stay Safe and Updated</p>
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
