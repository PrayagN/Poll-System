import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
 
};

function LineChart() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const votingChoice = queryParams.get("voting_choice");

  const [data, setData] = useState([]);
  const baseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    axios
      .get(`${baseUrl}/counts?voting_choice=${votingChoice}`)
      .then((response) => {
        setData(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [votingChoice]);

  // Prepare data for the chart
  const chartData = {
    labels: data?.map((item) => item.casted_date) || [], // X-axis labels (casted_at dates)
    datasets: [
      {
        label: "Number of Votes",
        data: data?.map((item) => item.vote_count) || [], // Y-axis data (number of votes)
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        borderWidth: 2, // Line width
        fill: false, // Fill area under the line
      },
    ],
  };

  return (
    <div style={{ position: "relative" }}>
      <Typography varient="h4">Line Chart</Typography>
      <div
        style={{
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          padding: "16px",
          maxHeight: "calc(100vh - 80px)", // Adjust this value as needed
          overflow: "auto", // Add overflow:auto to allow scrolling if the content exceeds maxHeight
        }}
      >
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
