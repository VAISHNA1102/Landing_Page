import React from 'react';
import './CSS/Home.css';
import Image from '../Img/RightSide.jpg';
const HomePage = () => {
    return (
        <div className="home-page">
            <div className="left-content">
                <h1>Your Brand, Our Canvas <br />
                    <span style={{ color: '#68C2B4' }}>For U Agency</span><br />
                    Truly made just <span style={{ color: 'red' }}>for you</span>
                </h1>
                <p>Discover the art of personalized digital marketing<br /> with FOR U AGENCY - it's not just business, it's a <br />masterpiece in the making.</p>
                <div className="buttons">
                    <button className="blue-button">HOW WE DO IT?</button>
                    <button className="green-button">BOOK FREE CALL</button>
                </div>
            </div>
            <div class="container">
                <div class="right-quarter-circle">
                    <img src={Image} alt="Not Found" />
                </div>
            </div>

        </div>
    );
};

export default HomePage;
