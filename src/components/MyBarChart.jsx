import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { salesData } from "./data";

const data = salesData;

const MyBarChart = () => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default MyBarChart;
