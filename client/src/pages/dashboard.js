import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="df-dashboard">
      <div className="df-tabs">
        <button className="df-active">Portfolio</button>
        <button>Control Center</button>
      </div>

      <div className="df-stats">
        <div className="df-stat-card">Capital<br /><strong>₹2,00,000</strong></div>
        <div className="df-stat-card">Fractions Owned<br /><strong>04</strong></div>
        <div className="df-stat-card">ROI<br /><small>(will be calculated annually)</small></div>
        <div className="df-stat-card">Payback Period<br /><strong>6–12 months</strong></div>
        <div className="df-stat-card">Tickets Opened<br /><strong>02</strong></div>
      </div>

      <div className="df-charts-section">
        <div className="df-revenue-chart">
          <div className="df-chart-header">
            <button className="df-active">Total Revenue</button>
            <button>Total Profit</button>
          </div>
          <div className="df-revenue-value">
            ₹50.4K <span className="df-growth">↑ 5% than last month</span>
          </div>
          <div className="df-bar-chart">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"].map((month, i) => (
              <div key={i} className="df-bar">
                <div className="df-bar-fill" style={{ height: `${50 + Math.random() * 50}px` }}></div>
                <div className="df-bar-label">{month}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="df-assets-card">
          <h4>Assets</h4>
          <div className="df-asset-info">
            <p><strong>Mr. Kadalai</strong></p>
            <p>Fractions Owned: 02</p>
            <p>Investment: ₹50,000</p>
            <p>Category: Food & Beverages</p>
            <p>Payback Period: 6–12 months</p>
          </div>
          <div className="df-purchase-box">
            <p>Do you want to add more fractions?</p>
            <button>Purchase Now</button>
          </div>
        </div>
      </div>

      <div className="df-performance-allocation">
        <div className="df-performance-table">
          <h4>Performance Insights</h4>
          <table>
            <thead>
              <tr>
                <th>Asset Name</th>
                <th>Fraction Owned</th>
                <th>Total Invested</th>
                <th>Current Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mr.Kadalai</td>
                <td>04</td>
                <td>₹1,00,000</td>
                <td>₹1,10,000</td>
              </tr>
              <tr>
                <td>Choco Delight</td>
                <td>02</td>
                <td>₹80,000</td>
                <td>₹86,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="df-fraction-pie">
          <h4>Allocation of Fractions</h4>
          <div className="df-circle">100%</div>
          <p><span className="df-dot"></span> Mr Kadalai</p>
        </div>
      </div>
    </div>
  );
}
