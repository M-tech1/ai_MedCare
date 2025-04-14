import React from "react";
import Chart from "react-apexcharts";

const AreaChart: React.FC = () => {
  const chartOptions = {
    chart: {
      type: "area",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      title: {
        text: "Values",
      },
    },
    tooltip: {
      x: {
        format: "MM",
      },
    },
  };

  const chartSeries = [
    {
      name: "Data Set 1",
      data: [10, 40, 35, 50, 49, 60, 70],
    },
    {
      name: "Data Set 2",
      data: [20, 30, 40, 60, 50, 70, 90],
    },
  ];

  return (
    <div className="w-full mx-auto bg-white p-4 shadow rounded-lg">
      <h2 className="text-l font-bold mb-4 text-primary">
        Statistiics of your health
      </h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;
