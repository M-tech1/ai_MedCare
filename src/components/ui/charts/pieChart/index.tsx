import React from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";

export const ApexChart = () => {
  const [state, setState] = React.useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (
          val: string,
          opts: {
            w: { globals: { series: { [x: string]: string } } };
            seriesIndex: string | number;
          }
        ) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart series={state.series} type="donut" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

const domContainer = document.querySelector("#app");
ReactDOM.render(<ApexChart />, domContainer);
