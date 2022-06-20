import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

//Data
import { pieCharts } from "../../data/data";

import "./styles.css";

const Analytics = () => {
  const [date, setDate] = useState("jan");

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
            <option value="jan">Jan</option>
            <option value="feb">Feb</option>
            <option value="mar">Mar</option>
            <option value="apr">Apr</option>
          </select>
        </div>
      </div>
      <div className="total">
        
      </div>
      <div>
        <ReactApexChart
          options={pieCharts.options}
          series={pieCharts.series}
          type="donut"
          width={400}
        />
      </div>
    </div>
  );
};

export default Analytics;
