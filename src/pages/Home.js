import React from "react";
import Analytics from "../components/home/Analytics";
import SpendsStatistic from "../components/home/SpendsStatistic";
import Transactions from "../components/home/Transactions";

import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-content">
        <SpendsStatistic />
        <Analytics />
      </div>
      <div className="right-content">
        <Transactions />
      </div>
    </div>
  );
};

export default Home;
