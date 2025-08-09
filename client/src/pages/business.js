import React, { useState, useEffect } from 'react';
import './business.css';
import kadalaiImage from '../assets/kadalai1.png';
import kadalaiImage2 from '../assets/kadalai2.png';
import kadalaiImage3 from '../assets/kadalai3.png';
import kadalaiImage4 from '../assets/kadalai4.png';
import img from "../assets/logo2.png"; 
import img1 from '../assets/businesskadalai1.png';
import img2 from '../assets/businesskadalai2.png';
import img3 from '../assets/businesskadalai3.png';

export default function BusinessListing() {
  const logos = [img1, img2, img3];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex(prevIndex => (prevIndex + 1) % logos.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="business-wrapper">
      
      
      <div className="business-hero-entry">
        
        <div className="business-entry-left">
          <h1 className="hero-title">New age</h1>
          <h2 className="hero-subtitle">Business Ownership</h2>
          <div className="button-container">
            <button className="btn-primary">Start Your Journey</button>
            <button className="btn-secondary">Connect with us</button>
          </div>
        </div>
        
       
        <div className="business-entry-logo">
          <img
            src={logos[currentLogoIndex]}
            alt="Animated Business Logo"
            className="hero-logo-animated"
          />
        </div>
        
      </div>

      
      <div className="business-cards-container">

        <div className="business-card">
          <img src={kadalaiImage} alt="Mr.Kadalai" />
          <div className="card-content">
            <h2>Mr. Kadalai</h2>
            <p>Mr. Kadalai delivers fresh, flavorful peanut snacks across Tamil Nadu, offering a convenient, healthy, and tasty option for all.</p>
            <div className="fraction">Fraction Size :</div>
            <p>Investment Type: Ownership + Operation Control</p>
            <p>Return on Investment: 6%</p>
            <p>Payback Period: 6 months</p>
            <div className="buttons">
              <button>Start Your Journey</button>
              <button>Know More</button>
            </div>
          </div>
        </div>

        <div className="business-card">
          <div className="card-content">
            <h2>Company 2</h2>
            <p>Innovative beauty startup offering personalized grooming solutions for modern lifestyles.</p>
            <div className="fraction">Fraction Size :</div>
            <p>Investment Type: Ownership + Operation Control</p>
            <p>Return on Investment: 6%</p>
            <p>Payback Period: 6 months</p>
            <div className="buttons">
              <button>Start Your Journey</button>
              <button>Know More</button>
            </div>
          </div>
          <img src={kadalaiImage2} alt="Company 2" />
        </div>

        <div className="business-card">
          <img src={kadalaiImage3} alt="Company 3" />
          <div className="card-content">
            <h2>Company 3</h2>
            <p>Cutting-edge IT startup delivering innovative tech solutions for businesses' growth.</p>
            <div className="fraction">Fraction Size :</div>
            <p>Investment Type: Ownership + Operation Control</p>
            <p>Return on Investment: 6%</p>
            <p>Payback Period: 6 months</p>
            <div className="buttons">
              <button>Start Your Journey</button>
              <button>Know More</button>
            </div>
          </div>
        </div>

        <div className="business-card">
          <div className="card-content">
            <h2>Company 4</h2>
            <p>Dynamic food startup offering fresh, healthy, and innovative culinary experiences.</p>
            <div className="fraction">Fraction Size :</div>
            <p>Investment Type: Ownership + Operation Control</p>
            <p>Return on Investment: 6%</p>
            <p>Payback Period: 6 months</p>
            <div className="buttons">
              <button>Start Your Journey</button>
              <button>Know More</button>
            </div>
          </div>
          <img src={kadalaiImage4} alt="Company 4" />
        </div>
      </div>

     
      <div className="dofracto-signup-container">
        <p className="dofracto-signup-text">
          To access exclusive business opportunities, track your investments, and
          connect with a dynamic entrepreneurial community. Join now to explore
          more and grow!
        </p>

        <div className="dofracto-signup-logo-wrapper">
          <img src={img} alt="Dofracto Logo" className="dofracto-signup-logo" />
        </div>

        <button className="dofracto-signup-button">
          Sign Up to Continue
        </button>
      </div>
    </div>
  );
}
