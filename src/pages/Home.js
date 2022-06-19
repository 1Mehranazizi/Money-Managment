import React from 'react';
import SpendsStatistic from '../components/home/SpendsStatistic';

import "./home.css";

const Home = () => {
    return (
        <div className='home-container'>
            <div className='left-content'>
                <SpendsStatistic />
            </div>
            <div className='right-content'></div>
        </div>
    );
};

export default Home;