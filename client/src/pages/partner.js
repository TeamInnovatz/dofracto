import React from "react";
import "./partner.css"; // Import the external CSS

export default function Partner() {
  return (
    <div className="partner-page">
      <div className="partner-section">
        <h2 className="partner-heading">Partner With Us</h2>
        <div className="partner-cards">
          <div className="partner-card">
            <h3>Huse Circle</h3>
            <p>
              Access fractional investors, grow your business, and join a
              supportive community.
            </p>
          </div>
          <div className="partner-card">
            <h3>Investor</h3>
            <p>
              Invest in fractional business opportunities with low entry and
              high potential.
            </p>
          </div>
          <div className="partner-card">
            <h3>Partner</h3>
            <p>
              Partner with Fractify to expand business listings and investment
              opportunities together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}