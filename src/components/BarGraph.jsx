import { Bar } from "react-chartjs-2";
// import Chart from "chart.js/auto";
import {
  Chart,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(BarElement, LinearScale, CategoryScale, Title, Legend, Tooltip);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels,
  datasets: [
    {
      label: "2021 Expenses",
      data: [
        1000, 3000, 4000, 1200, 4000, 5000, 8000, 3000, 4000, 2999, 3000, 6000,
      ],
      backgroundColor: "pink",
    },
    {
      label: "2022 Expenses",
      data: [
        4000, 5000, 8000, 3000, 4000, 2999, 1000, 3000, 4000, 1200, 3000, 6000,
      ],
      backgroundColor: "gray",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Expence Tracker",
    },
  },
};

const BarGraph = ()=>{
  return (
    <div style={{ height: 400, width: 800, margin: "auto" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarGraph;
