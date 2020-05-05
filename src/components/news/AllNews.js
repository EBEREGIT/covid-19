import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap/";
import Loading from "../Loading";
import Moment from "react-moment";

export default class AllNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      reports: [],
    };
  }

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

    if (!isLoaded) {
      return (
        <div className="text-center">
          <Loading />
        </div>
      );
    } else {
      return (
        <Row className="all-news">
          {newsReports[1].map((report) => (
            <Col xs={12} sm={12} md={4} lg={4}>
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
                    Authored By: {" "}
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
