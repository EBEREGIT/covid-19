import React from "react";
import { Col } from "react-bootstrap/";
import Chart from "chart.js";

export default function TotalComfirmedCases() {
  // load the graph
  window.addEventListener("load", function () {
    var ctx = document.getElementById("total-comfirmed-cases");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            // label: "# of Votes",
            data: [120, 285, 300, 500, 530, 540, 658, 780, 830, 850, 929, 960],
            backgroundColor: ["rgba(206,243,247,0.5)"],
            borderColor: ["rgba(7,39,106,1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  });
  return (
    <Col xs={12} sm={12} md={5} lg={5} className="chart-container">
      <Col xs={12} sm={12} md={12} lg={12}>
          <h5>Total Cases</h5>
        </Col>

      <canvas id="total-comfirmed-cases" width="100" height="100"></canvas>
    </Col>
  );
}
