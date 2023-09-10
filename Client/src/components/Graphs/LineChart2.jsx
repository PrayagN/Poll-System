import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Typography } from '@mui/material';
import { toast } from "react-toastify";

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

function LineChart2() {

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

  // Prepare data for the chart
  const chartData = {
    labels: data?.map((item) => item.casted_date) || [], // X-axis labels (casted_at dates)
    datasets: [
      {
        label: 'Choice of vote True',
        data: data?.map((item) => item.vote_count_true) || [], // Y-axis data (number of votes)
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        borderWidth: 2, // Line width
        fill: false, // Fill area under the line
      },
      {
        label: 'Choice of vote False',
        data: data?.map((item) => item.vote_count_false) || [], // Y-axis data (number of votes)
        borderColor: 'rgba(75, 192, 92, 1)', // Line color
        borderWidth: 2, // Line width
        fill: false, // Fill area under the line
      },
    ],
  };

  return (
   <div style={{ position: 'relative' }}>
  <Typography variant='h4'>Line Chart</Typography>
  <div
    style={{
      position: 'relative',
      // filter: 'blur(5px)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      borderRadius: '8px', 
      padding: '16px', 
    }}
  >
    <Line data={chartData} options={options} />
  </div>
</div>

  );
}

export default LineChart2;
