import React, { useEffect, useState, useRef } from 'react';
import './VisionAndMission.css';

function VisionAndMission() {
  const [screen, setScreen] = useState('first');
  const [animationClass, setAnimationClass] = useState('');
  const [interactionEnabled, setInteractionEnabled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setAnimationClass('slide-up');
      setScreen('second');
      setInteractionEnabled(true);
    }, 3500);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const autoAdvanceToSecond = () => {
    timeoutRef.current = setTimeout(() => {
      setAnimationClass('slide-up');
      setScreen('second');
    }, 3500);
  };

  const handleClick = (e) => {
    if (!interactionEnabled) return;

    const clickX = e.clientX;
    const half = window.innerWidth / 2;

    if (clickX < half && screen === 'second') {
      clearTimeout(timeoutRef.current);
      setAnimationClass('slide-down');
      setScreen('first');
      autoAdvanceToSecond(); 
    } else if (clickX >= half && screen === 'first') {
      clearTimeout(timeoutRef.current);
      setAnimationClass('slide-up');
      setScreen('second');
    }
  };

  return (
    <div className="wv-container" onClick={handleClick}>
      <section className={`wv-screen wv-first ${screen === 'first' ? animationClass : ''}`} style={{ zIndex: screen === 'first' ? 2 : 1 }}>
        <h1 className="h1prop">Who Is DoFracto For?</h1>
        <br /><br />
        <ul className="ulprop">
          <li className="liprop">
            <span className="arrow">▼</span> <span className="wv-title">Aspiring Entrepreneurs:</span> Get a head start on your business <br />
            journey without high capital or management burdens.
          </li>
          <li className="liprop">
            <span className="arrow">▼</span> <span className="wv-title">Busy Professionals:</span> Invest in businesses without quitting your 9–5 <br />
            job.
          </li>
          <li className="liprop">
            <span className="arrow">▼</span> <span className="wv-title">Investors:</span> Diversify your portfolio across various sectors with <br />
            fractional ownership.
          </li>
        </ul>
      </section>

      <section className={`wv-screen wv-second ${screen === 'second' ? animationClass : ''}`} style={{ zIndex: screen === 'second' ? 2 : 1 }}>
        <h1 className="h1prop">Our Vision</h1>
        <p className="p_prop">
          We aim to democratize business ownership by making it accessible to all.<br />
          Whether you’re a student, a working professional, or a seasoned investor,<br />
          DoFracto offers a pathway to financial growth and business success.
        </p>
        <h1 className="h1prop">Ready to Take Ownership?</h1>
        <p className="p_prop">
          Join DoFracto today and start building your business portfolio —<br />
          one fraction at a time. Let’s unlock new possibilities together.
        </p>
      </section>
    </div>
  );
}

export default VisionAndMission;
