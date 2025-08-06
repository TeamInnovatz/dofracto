import React, { useState } from 'react';
import './control.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

function Control() {
  const [activeTimeframe, setActiveTimeframe] = useState('Today');

  const data = {
    labels: ['Mojito', 'Cup Noodles', 'Kulfi', 'Healthy Balls', 'Chicken Biryani', 'Kushka'],
    datasets: [
      {
        data: [20000, 25000, 50000, 60000, 75000, 40000],
        backgroundColor: '#6366F1',
        borderRadius: 6,
        barThickness: 2.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          color: '#fff',
          stepSize: 25000,
          maxTicksLimit: 4,
        },
        min: 0,
        max: 75000,
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: '#fff',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleTimeframeClick = (label) => {
    setActiveTimeframe(label);
  };

  return (
    <div className="dashboard">
      <div className="nav">
        <div className="nav-line-one">
          <button className="nav-btn">Portfolio</button>
          <button className="nav-btn active">Control Center</button>
        </div>

        <div className="nav-line-two">
          <span className="nav-label">Individual Monitoring</span>
          <div className="monitoring-buttons">
            {['Today', 'Last 7 Days', 'Last 30 Days', 'Last Year'].map((label) => (
              <button
                key={label}
                className={`nav-btn small ${activeTimeframe === label ? 'active' : ''}`}
                onClick={() => handleTimeframeClick(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <button className="dropdown-btn">Mr. Kadalai ▾</button>
        </div>
      </div>

      <div className="stats-row">
        <div className="controlcard">
          <h4>Total Sales</h4>
          <p>₹250000</p>
          <span className="green">+11.01%</span>
        </div>
        <div className="controlcard">
          <h4>Order Processed</h4>
          <p>₹3000</p>
          <span className="green">+7.01%</span>
        </div>
        <div className="controlcard expenses">
          <h4>Total Expenses</h4>
          <p>₹170000</p>
          <span className="red">-5.01%</span>
        </div>
      </div>

      <div className="content">
        <div className="tracker">
          <div
            className="tracker-header"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
              marginBottom: '20px',
            }}
          >
            <select
              className="sample-dropdown"
              style={{ fontWeight: 'bold', fontSize: '14px', padding: '6px' }}
              defaultValue=""
            >
              <option value="" disabled>Items Tracker</option>
              <option>Sample 1</option>
              <option>Sample 2</option>
              <option>Sample 3</option>
            </select>
          </div>
          <div style={{ height: '200px', display: 'flex', justifyContent: 'center' }}>
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="realtime-box">
          <div className="realtime-header">
            <h4>Real Time Monitoring 📷</h4>
          </div>

          <label>User Id</label><br /><br />
          <input type="text" placeholder="us1234568902" className="realtime-input" /><br />

          <label>Password</label>
          <div className="realtime-password"><br />
            <input type="password" placeholder="*********" />
            <span className="lock-icon">🔒</span>
          </div>

          <div className="steps">
            <h5>Instructions & Quick Access Actions</h5>
            <p>Step-by-step guide for users to log in<br />to the external camera monitoring app.</p>
            <p>Steps:</p>
            <ol>
              <li>Download and open the external camera app from the official website.</li><br />
              <li>Enter your User ID and Password provided above.</li><br />
              <li>Click “Login” to access your live store footage.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control;
