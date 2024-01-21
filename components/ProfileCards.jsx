import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(ArcElement, LinearScale, Title, Tooltip, Legend);

const ProfileCards = () => {
  const [chartData, setChartData] = useState({
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
        borderWidth: 0,
      },
    ],
  });

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex justify-around mt-7 ">
      <div>
        <Doughnut
          data={chartData}
          width={134}
          height={134}
          options={chartOptions}
        />
      </div>
      <div className="text-left  ml-12">
        <div className="mb-3">
          <div className="flex items-center text-left">
            <div className=" w-3 h-3 bg-[#98D89E] rounded-[50%] mr-2"></div>
            <h4 className="font-bold">Basic Tees</h4>
          </div>
          <p className="text-[#858585] ml-5 text-sm">55%</p>
        </div>
        <div className="mb-3">
          <div className="flex items-center text-left">
            <div className=" w-3 h-3 bg-[#F6DC7D] rounded-[50%] mr-2"></div>
            <h4 className="font-bold">Custom Short Pants</h4>
          </div>
          <p className="text-[#858585] ml-5 text-sm">31%</p>
        </div>
        <div className="mb-3">
          <div className="flex items-center text-left">
            <div className=" w-3 h-3 bg-[#EE8484] rounded-[50%] mr-2"></div>
            <h4 className="font-bold">Super Hoodies</h4>
          </div>
          <p className="text-[#858585] ml-5 text-sm">14%</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
