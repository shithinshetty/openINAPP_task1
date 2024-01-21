import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
const BarChart = () => {
  const data = {
    labels: ["", "Week 1", "", "Week 2", "", "Week 3", "", "Week 4", ""],
    datasets: [
      {
        label: "User",
        data: [0, 500, 0, 350, 0, 200, 0, 400, 0],
        backgroundColor: "#98D89E",
        borderRadius: 5,
      },
      {
        label: "Guest",
        data: [0, 400, 0, 450, 0, 300, 0, 350, 0],
        backgroundColor: "#EE8484",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          borderRadius: 10,
          useBorderRadius: true,
          usePointStyle: true,

          boxHeight: 7,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        type: "category",
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      id="mainGraphContainer"
      className="p-5 rounded-[20px] h-[370px] bg-white w-[100%] mb-auto border-2 border-slate-300"
    >
      <div className="max-w-[99%] h-[300px] m-auto mb-3 ">
        <div className="flex justify-between items-center">
          <div className="flex-[7]">
            <h3 className="font-bold text-2xl">Activities</h3>
            <div className="flex-[1] flex justify-start gap-2 items-center">
              <p className="font-extralight">May - June 2021</p>
            </div>
          </div>
        </div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
