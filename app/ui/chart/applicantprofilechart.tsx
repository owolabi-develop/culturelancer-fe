import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// Hardcoded data for the last 7 days
const demoData = [
  { date: "2024-11-01", views: 120 },
  { date: "2024-11-02", views: 150 },
  { date: "2024-11-03", views: 180 },
  { date: "2024-11-04", views: 220 },
  { date: "2024-11-05", views: 170 },
  { date: "2024-11-06", views: 210 },
  { date: "2024-11-07", views: 240 }
];

// Prepare chart data directly
const labels = demoData.map((item) =>
  new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })
);
const data = demoData.map((item) => item.views);

const chartData: ChartData<"line"> = {
  labels,
  datasets: [
    {
      label: "Profile Views",
      data,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "rgba(75,192,192,1)",
      tension: 0.4,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
    legend: {
      display: true,
      position: "top",
    },
  },
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false,
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Date",
      },
    },
    y: {
      title: {
        display: true,
        text: "View Count",
      },
      beginAtZero: true,
    },
  },
};

const ApplicantProfileViewChart: React.FC = () => {
  return (
     <div style={{ width: "100%", height: "50%" }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ApplicantProfileViewChart;





