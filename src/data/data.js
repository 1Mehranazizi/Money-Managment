const convertToPercentage = (totalPrice, price) => {
  const onePercentage = totalPrice / 100;
  const percentagePrice = price / onePercentage;
  return Math.floor(percentagePrice);
};

export const columnChart = {
  series: [
    {
      name: "Income",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Outcome",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
  ],
  options: {
    colors: ["#474edb", "#00eeff"],
    chart: {
      type: "bar",
      height: 250,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        radius: 12,
        fillColors: ["#474edb", "#00eeff"],
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
        borderRadius: 5,
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
            width: 300,
          },
          plotOptions: {
            bar: {
              columnWidth: "70%",
            },
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
  series: [1868, 1517, 583, 525, 350, 350, 291, 350],
  options: {
    colors: [
      "#00eeff",
      "#ffa600",
      "#003ec4",
      "#f86019",
      "#707070",
      "#00ff2a",
      "#9900ff",
      "#bdbdbd",
    ],
    chart: {
      width: "100%",
      type: "donut",
      id: "pie-chart",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "80%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: "1rem",
              color: "#a1a1a1",
              formatter: function (val) {
                let total = val.globals.seriesTotals.reduce(function (
                  previousValue,
                  currentValue
                ) {
                  return previousValue + currentValue;
                },
                0);
                return `$ ${total}`;
              },
            },
          },
        },
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
        return (
          `${convertToPercentage(
            5834,
            opts.w.globals.series[opts.seriesIndex]
          )}% ` + val
        );
      },
      position: "right",
      markers: {
        width: 12,
        height: 12,
        fillColors: [
          "#00eeff",
          "#ffa600",
          "#003ec4",
          "#f86019",
          "#707070",
          "#00ff2a",
          "#9900ff",
          "#bdbdbd",
        ],
        radius: 12,
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
            horizontalAlign: "center",
          },
        },
      },
    ],
  },
};
