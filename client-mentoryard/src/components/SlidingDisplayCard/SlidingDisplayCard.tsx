import React from "react";
import frontImage from "../../../public/Mentors/AntMan.jpeg";

const SlidingDisplayCard: React.FC = () => {
  return (
    <div className="slider__container">
      <div className="wrapper">
        <div className="outer">
          <div className="card" style={{ "--delay": "-1" }}>
            <div className="content">
              <div className="img">
                <img src={frontImage} alt="" />
              </div>
              <div className="details">
                <span className="name">Sumit Kapoor</span>
                <p>Frontend Developer</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
          <div className="card" style={{ delay: 0 }}>
            <div className="content">
              <div className="img">
                <img src={frontImage} alt="" />
              </div>
              <div className="details">
                <span className="name">Andrew Neil</span>
                <p>YouTuber & Blogger</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
          <div className="card" style={{ "--delay": 1 }}>
            <div className="content">
              <div className="img">
                <img src={frontImage} alt="" />
              </div>
              <div className="details">
                <span className="name">Jasmine Carter</span>
                <p>Freelancer & Vlogger</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
          <div className="card" style={{ "--delay": 2 }}>
            <div className="content">
              <div className="img">
                <img src={frontImage} alt="" />
              </div>
              <div className="details">
                <span className="name">Justin Chung</span>
                <p>Backend Developer</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
          <div className="card" style={{ "--delay": 2 }}>
            <div className="content">
              <div className="img">
                <img src={frontImage} alt="" />
              </div>
              <div className="details">
                <span className="name">Adrina Calvo</span>
                <p>Teacher & Advertiser</p>
              </div>
            </div>
            <a href="#">Follow</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingDisplayCard;
