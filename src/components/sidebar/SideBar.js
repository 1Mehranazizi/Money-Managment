import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

//Image
import UserImage from "../../assets/img/moustache.jpg";

//Icons
import HomeIcon from "../../assets/svg/home.svg";
import ChartIcon from "../../assets/svg/chart.svg";
import CheckIcon from "../../assets/svg/check.svg";
import WalletIcon from "../../assets/svg/wallet.svg";
import HistoryIcon from "../../assets/svg/history.svg";
import SeyyingIcon from "../../assets/svg/setting.svg";

const SideBar = ({ openMenuHandler, openMenu }) => {
  return (
    <div className={openMenu ? "sidebar open" : "sidebar"}>
      <div className="sidebar_container">
        <div className="user-profile">
          <img src={UserImage} alt="user profile" />
          <div className="user-information">
            <p className="username_profile">Mehran Azizi</p>
            <small className="userjob_profile">Front End Developer</small>
          </div>
        </div>
        <nav className="sidebar_navbar">
          <ul className="sidebar_nav">
            <li
              className={
                window.location.pathname === "/home"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={openMenuHandler}
            >
              <Link to="/home">
                <img src={HomeIcon} alt="home-icon" />
                Home
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/overview"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={openMenuHandler}
              id="ovweview"
            >
              <Link to="/overview">
                <img src={ChartIcon} alt="ovwerview" />
                OverView
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/payments"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={openMenuHandler}
              id="payments"
            >
              <Link to="/payments">
                <img src={CheckIcon} alt="payments" />
                Payments
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/transactions"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={openMenuHandler}
              id="transactions"
            >
              <Link to="/transactions">
                <img src={WalletIcon} alt="transactions" />
                Transactions
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/history"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={openMenuHandler}
              id="history"
            >
              <Link to="/history">
                <img src={HistoryIcon} alt="history" />
                History
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/setting"
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={openMenuHandler}
              id="setting"
            >
              <Link to="/setting">
                <img src={SeyyingIcon} alt="setting" />
                Setting
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
