import React from "react";
import styles from "./SpendsStatistic.module.css";
import ReactApexChart from "react-apexcharts";

//Date
import { columnChart } from "../../data/data";

const SpendsStatistic = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.left_header}>
          <h2>Spends Statistic</h2>
        </div>
        <div className={styles.set_date}>
          <select className={styles.select_date}>
            <option value="year" selected>
              Years
            </option>
            <option value="month" selected>
              Month
            </option>
            <option value="week" selected>
              Week
            </option>
            <option value="day" selected>
              Day
            </option>
          </select>
        </div>
      </div>
      <div className={styles.card_body}>
        <ReactApexChart
          options={columnChart.options}
          series={columnChart.series}
          type="bar"
          height={280}
        />
      </div>
    </div>
  );
};

export default SpendsStatistic;
