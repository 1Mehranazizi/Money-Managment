export const columnChart = {
  series: [
    {
      name: "Income",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Outcome",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 250,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    responsive: [
      {
        breakpoint: 560,
        options: {
          chart: {
            width: 270,
          },
        },
      },
    ],
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val;
        },
      },
    },
  },
};

export const pieCharts = {
  series: [32, 26, 10, 9, 6, 6, 5, 6],
  options: {
    chart: {
      width: 380,
      type: "donut",
      id: "pie-chart",
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
      formatter: function (val, opts) {
        return `${opts.w.globals.series[opts.seriesIndex]}% ` + val;
      },
    },
    labels: [
      "Grosery",
      "Restaurants",
      "Sport",
      "Travels",
      "Utility",
      "Fun",
      "Medicine",
      "Other",
    ],
    responsive: [
      {
        breakpoint: 560,
        options: {
          chart: {
            width: 270,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
