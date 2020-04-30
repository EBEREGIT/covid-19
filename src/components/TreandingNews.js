import React, { Component } from "react";
import Loading from "./Loading";
import {
  Container,
  Accordion,
  Card,
  Jumbotron,
  Button,
  Tab,
  Tabs,
  Table
} from "react-bootstrap/";
import Footer from "./Footer";
import Moment from "react-moment";

export default class TreandingNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      reports: []
    };
  }

  componentDidMount() {
    fetch("https://api.coronatracker.com/news/trending")
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
    let newsReports = Object.values(reports);

    if (!isLoaded) {
      return (
        <div className="text-center">
          <Loading />
        </div>
      );
    } else {
      return (
        <Jumbotron>
          <h1 className="text-center">Trending News</h1>
          <Container>
            <Accordion defaultActiveKey="0">
              {newsReports[1].map(report => (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={report.nid}
                    >
                      {report.title}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={report.nid}>
                    <Card.Body>
                      <Tabs fill defaultActiveKey="news" id="news-details">
                        <Tab eventKey="report" title="Report">
                          <Card>
                            <Card.Img variant="top" src={report.urlToImage} />

                            <Card.Header>{report.description}</Card.Header>
                            <Card.Body>
                              <blockquote className="blockquote mb-0">
                                <p>
                                  {" "}
                                  {report.content}{" "}
                                  <a
                                    href={report.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Continue Reading...
                                  </a>{" "}
                                </p>
                                <footer className="blockquote-footer">
                                  Authored by:{" "}
                                  <cite title="Source Title">
                                    <span>
                                      {report.author
                                        ? report.author
                                        : "Author's details not Found"}
                                    </span>
                                  </cite>
                                </footer>
                              </blockquote>
                            </Card.Body>
                          </Card>
                        </Tab>

                        <Tab eventKey="dates" title="Dates">
                          <Table striped bordered hover variant="dark">
                            <thead>
                              <tr>
                                <th>Originally Published At</th>
                                <th>Retrieved At</th>
                                <th>From</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><Moment>{report.publishedAt}</Moment></td>
                                <td><Moment>{report.publishedAt}</Moment></td>
                                <td>{report.siteName}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Tab>
                      </Tabs>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Container>
          <Footer />
        </Jumbotron>
      );
    }
  }
}
