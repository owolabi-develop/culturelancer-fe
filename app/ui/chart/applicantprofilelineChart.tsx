import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Filler
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement,Filler, Tooltip, Legend);

// Sample rating data
const ratingData = [
  { rating: "Excellent", count: 45 },
  { rating: "Good", count: 30 },
  { rating: "Average", count: 15 },
  { rating: "Poor", count: 10 },
];

// Prepare data for the chart
const labels = ratingData.map((item) => item.rating);
const data = ratingData.map((item) => item.count);

const chartData: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "Client Ratings",
      data,
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(255, 99, 132, 0.6)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
    },
    legend: {
      display: true,
      position: "top",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Rating",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Clients",
      },
      beginAtZero: true,
    },
  },
};

const ClientRatingSummaryChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "50%" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ClientRatingSummaryChart;
