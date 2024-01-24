import { Pie } from "react-chartjs-2";
import { salesData } from "./data";

const data = salesData;

const MyPieChart = () => {
  return (
    <div>
      <Pie data={salesData} />
    </div>
  );
};

export default MyPieChart;
