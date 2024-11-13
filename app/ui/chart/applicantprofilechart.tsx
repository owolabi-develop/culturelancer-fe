import React from "react";
import useSWR from 'swr';
import Cookies from "js-cookie";
import { useParams } from 'next/navigation'
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
  Filler
} from "chart.js";

ChartJS.register(LineElement, CategoryScale,Filler, LinearScale, PointElement, Tooltip, Legend);
 



const ApplicantProfileViewChart: React.FC = () => {

  type profileviewSchema ={
    id:string,
    date_viewed:string,
    view_count:number
  }
  const params = useParams()
  
//  fetch profile views
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("item")}`,
      },
    }).then((r) => r.json());
const { data:profileviews,error,isLoading} =   useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}careerportal/get-applicant-profile-views/${params.id}/`, fetcher)
console.log("new profile:",profileviews)

if(isLoading){
    return <div className='bg-slate-50 drop-shadow-lg rounded-md animate-pulse py-1 px-4'>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
    <div className='w-full bg-slate-300 py-1 rounded-full my-3'></div>
</div>
}
if(error){
    return <div>fail to fetch view data</div>
}


// Prepare chart data directly
const labels = profileviews.map((item:profileviewSchema) =>
  new Date(item.date_viewed).toLocaleDateString("en-US", { month: "short", day: "numeric" })
);
const data = profileviews.map((item:profileviewSchema) => item.view_count);

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
  return (
     <div style={{ width: "100%", height: "50%" }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ApplicantProfileViewChart;





