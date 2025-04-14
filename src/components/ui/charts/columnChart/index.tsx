import React from "react";
import Chart from "react-apexcharts";

const Chart1: React.FC = () => {
  const chartOptions = {
    chart: {
      id: "basic-bar",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    colors: ["#3b82f6", "#4bd574"], // Tailwind blue-500
  };

  const chartSeries = [
    {
      name: "Revenue",
      data: [30, 40, 45, 50, 49, 60],
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full h-full">
      <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={200}
      />
    </div>
  );
};

export default Chart1;
