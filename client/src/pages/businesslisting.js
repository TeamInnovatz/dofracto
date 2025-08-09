import React from "react";
import "./businesslisting.css";

const businesses = [
  {
    name: "Mr. Kadalai",
    description: "Healthy snacks made from native ingredients.",
    image: "https://source.unsplash.com/300x200/?nuts,food",
    fraction: "1/20",
    investmentType: "Equity",
    payback: "12 months"
  },
  {
    name: "RG Tech",
    description: "Reliable IT services & development.",
    image: "https://source.unsplash.com/300x200/?technology,office",
    fraction: "1/10",
    investmentType: "Revenue Share",
    payback: "18 months"
  },
  {
    name: "Sun Pharma",
    description: "Affordable healthcare through trusted products.",
    image: "https://source.unsplash.com/300x200/?pharmacy,healthcare",
    fraction: "1/5",
    investmentType: "Equity",
    payback: "24 months"
  },
  {
    name: "Zen Wear",
    description: "Yoga-inspired sustainable clothing line.",
    image: "https://source.unsplash.com/300x200/?yoga,clothing",
    fraction: "1/8",
    investmentType: "Equity",
    payback: "15 months"
  },
  {
    name: "FarmFresh",
    description: "Organic produce straight from farmers.",
    image: "https://source.unsplash.com/300x200/?organic,vegetables",
    fraction: "1/6",
    investmentType: "Revenue Share",
    payback: "9 months"
  },
  {
    name: "CraftFlow",
    description: "Local artisans meet modern market demand.",
    image: "https://source.unsplash.com/300x200/?crafts,handmade",
    fraction: "1/12",
    investmentType: "Equity",
    payback: "14 months"
  }
];

export default function BusinessListing() {
  return (
    <div className="bizapp-container">
      <section className="biz-hero">
        <div className="biz-hero-content">
          <h1>
            New age
            <br />
            <span>Business Ownership</span>
          </h1>
          <div className="biz-hero-buttons">
            <button className="biz-explore-btn">Start Exploring</button>
            <button className="biz-connect-btn">Connect with us</button>
          </div>
        </div>
        <div className="biz-hero-image">
          <img src="https://via.placeholder.com/300x200" alt="Hero Art" />
        </div>
      </section>

      <div className="biz-filters">
        <select><option>Industry</option></select>
        <select><option>Capital Size</option></select>
        <select><option>Investment Type</option></select>
      </div>

      <div className="biz-grid">
        {businesses.map((biz, idx) => (
          <div key={idx} className="biz-card">
            <img src={biz.image} alt={biz.name} className="biz-img" />
            <div className="biz-content">
              <h2 className="biz-name">{biz.name}</h2>
              <p className="biz-summary">{biz.description}</p>
              <div className="biz-details">
                {biz.fraction && <p><strong>Fraction:</strong> {biz.fraction}</p>}
                {biz.investmentType && <p><strong>Type:</strong> {biz.investmentType}</p>}
                {biz.payback && <p><strong>Payback:</strong> {biz.payback}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
