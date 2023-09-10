import { useState, useEffect, React } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { toast } from "react-toastify";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

function BarGraph() {
  const [data, setData] = useState([]);
  const baseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    axios
      .get(`${baseUrl}/line-chart`)
      .then((response) => {
        setData(response.data.result);
      })
      .catch((error) => {
        toast.error(error?.response?.data.error, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }, []);

  const chartData = {
    labels: data?.map((item) => item.casted_date) || [], // X-axis labels (casted_at dates)
    datasets: [
      {
        label: "Choice of vote True",
        data: data?.map((item) => item.vote_count_true) || [], // Y-axis data (number of votes)
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Line color
      },
      {
        label: "Choice of vote False",
        data: data?.map((item) => item.vote_count_false) || [], // Y-axis data (number of votes)
        backgroundColor: "rgba(53, 162, 235, 0.5)", // Line color
      },
    ],
  };
  return (
    <div style={{ position: "relative" }}>
      <Typography variant="h4">Bar Chart</Typography>
      <div
        style={{
          position: "relative",
          // filter: 'blur(5px)',
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}

export default BarGraph;
