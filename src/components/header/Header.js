import React from "react";
import "./style.css";

//Icons
import SearchIcon from "../../assets/svg/search.svg";
import ChatIcon from "../../assets/svg/comment.svg";
import HeadPhoneIcon from "../../assets/svg/headphon.svg";
import MenuIcon from "../../assets/svg/menu-burger.svg";

const Header = ({ openMenuHandler, openMenu }) => {
  return (
    <div className="header">
      <div className="search__header">
        <button className="search-button">
          <img src={SearchIcon} alt="search-icon" />
        </button>
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      <div className="hamburger" onClick={openMenuHandler}>
        <img src={MenuIcon} alt="hamburger-icon" />
      </div>
      <div className="Link__header">
        <div className="help">
          <img src={ChatIcon} alt="chat-icon" />
          <a href="/home">Feedback</a>
        </div>
        <div className="help">
          <img src={HeadPhoneIcon} alt="headphone-icon" />
          <a href="/home">Help</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
