import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./styles.css";

//Date
import { columnChart } from "../../data/data";

const SpendsStatistic = () => {
  const [date, setDate] = useState("year");

  return (
    <div className="chart-card">
      <div className="chart-card__Header">
        <div>
          <h2>Spends Statistic</h2>
        </div>
        <div className="set_date">
          <select
            className="select_date"
            value={date}
            onChange={(e) => setDate(e.target.selected)}
          >
            <option value="year">Year</option>
            <option value="month">Month</option>
            <option value="week">Week</option>
            <option value="day">Day</option>
          </select>
        </div>
      </div>
      <div>
        <ReactApexChart
          options={columnChart.options}
          series={columnChart.series}
          type="bar"
          height={250}
        />
      </div>
    </div>
  );
};

export default SpendsStatistic;
