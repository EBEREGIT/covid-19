import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap/";
import Loading from "../Loading";
import Moment from "react-moment";
import PageTitle from "../PageTitle";

export default class AllNews extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      isLoaded: false,
      reports: [],
    };
  }

  // API call
  componentDidMount() {
    fetch("https://api.coronatracker.com/news/trending")
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
    let newsReports = Object.values(reports);

    // show loading while data is being fetched
    if (!isLoaded) {
      return (
        <div className="text-center">
          <Loading name="Trending News" />
        </div>
      );
    } else {

      // data from API displayed after fetch is complete
      return (
        <Row className="all-news">

          {/* page title */}
          <PageTitle title="Trending News" />

          {/* news report */}
          {newsReports[1].map((report) => (
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={report.urlToImage} />
                <Card.Body>

                  {/* news title */}
                  <Card.Title>{report.title}</Card.Title>
                  
                  {/* date published */}
                  <Card.Subtitle className="mb-2 text-muted">
                    <Moment>{report.publishedAt}</Moment>
                  </Card.Subtitle>
                  
                  {/* author */}
                  <Card.Subtitle className="mb-2 text-muted author">
                    Author: {" "}
                    <span>
                      {report.author
                        ? report.author
                        : "Author's details not Found"}
                    </span>
                  </Card.Subtitle>

                  {/* read more */}
                  <Card.Link href={report.url}>Read Full Article</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
    }
  }
}
