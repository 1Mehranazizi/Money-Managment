import React from "react";

//Icons
import EditIcon from "../../assets/svg/pencil.svg";
import FireIcon from "../../assets/svg/flame.svg";
import HeartIcon from "../../assets/svg/heart.svg";
import MusicIcon from "../../assets/svg/music-alt.svg";
import ExchangeIcon from "../../assets/svg/exchange.svg";

const Transactions = () => {
  return (
    <div className="card h-100">
      <div className="card__Header">
        <h2>My Cards</h2>
        <div className="card__button">
          <span className="edit-button">
            <img src={EditIcon} alt="edit-icon" />
          </span>
        </div>
      </div>
      <div className="visa-card">
        <h4 className="title-visa-card">Universal Bank</h4>
        <div className="number-card">
          <small>8888</small>
          <small>1111</small>
          <small>3333</small>
          <small>7777</small>
        </div>
        <div className="date-card">
          <small className="date">05/24</small>
          <h2 className="visa">VISA</h2>
        </div>
      </div>
      <div className="trans">
        <div className="card__Header mb-0">
          <h2>Transactions</h2>
        </div>
        <div className="tranc-child">
          <div className="left__trans-child">
            <div className="transactions-icon">
              <img src={FireIcon} alt="fire" />
            </div>
            <div className="transactions-info">
              <p>Gym</p>
              <small>10:13 AM</small>
            </div>
          </div>
          <div className="right__trans-child">
            <p>-$58.50</p>
          </div>
        </div>
        <div className="tranc-child">
          <div className="left__trans-child">
            <div className="transactions-icon">
              <img src={HeartIcon} alt="fire" />
            </div>
            <div className="transactions-info">
              <p>Grosery</p>
              <small>09:20 AM</small>
            </div>
          </div>
          <div className="right__trans-child">
            <p>-$31.48</p>
          </div>
        </div>
        <div className="tranc-child">
          <div className="left__trans-child">
            <div className="transactions-icon">
              <img src={MusicIcon} alt="fire" />
            </div>
            <div className="transactions-info">
              <p>Apple i Tunes</p>
              <small>Jun 12, 2020 11:14 PM</small>
            </div>
          </div>
          <div className="right__trans-child">
            <p>-$7.00</p>
          </div>
        </div>
        <div className="tranc-child">
          <div className="left__trans-child">
            <div className="transactions-icon">
              <img src={ExchangeIcon} alt="fire" />
            </div>
            <div className="transactions-info">
              <p>Anna Lee</p>
              <small>May 30, 2020 09:20 AM</small>
            </div>
          </div>
          <div className="right__trans-child">
            <p>-$160.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
