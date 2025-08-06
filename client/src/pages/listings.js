import React from "react";
import "./listings.css";
import foodImg from "../assets/food.jpg";
import pharmaImg from "../assets/image.png";
import itImg from "../assets/it.jpeg";
import othersImg from "../assets/others.jpeg";

const Listings = () => {
  return (
    <div className="listings-container">
      <div className="listings-title-wrapper">
        <h1 className="listings-title">
          L
          <span className="dotless-i">i</span>
          st
          <span className="i-glow-container">
            i<span className="neon-dot" />
          </span>
          ngs
        </h1>
      </div>

      <p className="listings-description">
        Discover businesses across Beauty, Food, IT, and Fashion, tailored to your interests and ready for fractional ownership.
      </p>
      <div className="listings-main-grid">
        <div className="grid-left-col">
          <div className="listing-card listing-card-food">
            <div className="icon-circle">
              <img src={foodImg} alt="Food Icon" className="icon-img" />
            </div>
            <span className="listing-card-text">Food &amp; Beverages</span>
          </div>
        </div>
        <div className="grid-right-col">
          <div className="listing-card listing-card-pharma">
            <div className="icon-circle">
              <img src={pharmaImg} alt="Pharma Icon" className="icon-img" />
            </div>
            <span className="listing-card-text">Pharmaceuticals</span>
          </div>
          <div className="right-bottom-row">
            <div className="listing-card listing-card-it">
              <div className="icon-circle">
                <img src={itImg} alt="IT Icon" className="icon-img" />
              </div>
              <span className="listing-card-text">Information Technology</span>
            </div>
            <div className="listing-card listing-card-others">
              <div className="icon-circle">
                <img src={othersImg} alt="Others Icon" className="icon-img" />
              </div>
              <span className="listing-card-text">Others</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
