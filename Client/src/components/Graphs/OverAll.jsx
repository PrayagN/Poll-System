import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
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

function OverAll() {
  const [data, setData] = useState([]);
  const baseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    axios
      .get(`${baseUrl}/over-all`)
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

  const trueCount = data.length > 0 ? data[0].count : 0;
  const falseCount = data.length > 1 ? data[1].count : 0;
  const chartData = {
    labels: ['VotingChoice ' ],
    datasets: [
      {
        label: 'Choice of vote True',
        data: [trueCount],
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Background color for 'True'
      },
      {
        label: 'Choice of vote False',
        data: [falseCount],
        backgroundColor: 'rgba(53, 162, 235, 0.5)', // Background color for 'False'
      },
    ],
  };
  
  
  return (
    <div style={{ position: 'relative' }}>
      <Typography variant="h4">OverAll Chart</Typography>
      <div
        style={{
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          padding: '16px',
        }}
      >
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}

export default OverAll;
