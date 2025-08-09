import React, { useRef ,useState, useEffect } from "react";
import { FaHandshake, FaCompactDisc, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiSentry, SiOpenai } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";

import "./huse.css";

const Huse = () => {
const [showSecond, setShowSecond] = useState(false);
const [animationStarted, setAnimationStarted] = useState(false);
const [revealStarted, setRevealStarted] = useState(false);
const [visibleIndex, setVisibleIndex] = useState(0);
const sectionRef = useRef(null);
const scrollRef = useRef(null);
const dividerRef = useRef(null);



const differentiatorCards = [
  {
    icon: <FaHandshake className="huse-diff-icon" />,
    title: "Real Business Exposure",
    desc: "Work with live businesses,not just simulation"
  },
  {
    icon: <SiSentry className="huse-diff-icon" />,
    title: "Affordable Entry",
    desc: "Start small, grow big--invest in fractional business ownership"
  },
  {
    icon: <FaCompactDisc className="huse-diff-icon" />,
    title: "Support System",
    desc: "We've got your back with mentors, resources, and expert guidance"
  },
  {
    icon: <SiOpenai className="huse-diff-icon" />,
    title: "Learn Anytime Anywhere",
    desc: "Flexible sessions that fit your schedule"
  },
  {
    icon: <GiReceiveMoney className="huse-diff-icon" />,
    title: "Earn While You Learn",
    desc: "Get returns while you build your future"
  }
];

const handleStartAnimation = () => {
  if (!animationStarted) {
    setAnimationStarted(true);
    let i = 1;
    const interval = setInterval(() => {
      setVisibleIndex(i);
      if (i >= differentiatorCards.length - 1) {
        clearInterval(interval);
      }
      i++;
    }, 4000);
  }
}


useEffect(() => {
    const interval = setInterval(() => {
      setShowSecond((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setRevealStarted(true);
        handleStartAnimation();
        observer.disconnect(); 
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
},[]);

useEffect(() => {
  const container = scrollRef.current;
  const divider = dividerRef.current;
  if (!container || !divider) return;

  const scrollDistance = container.scrollWidth - container.clientWidth;
  const minWidth = 400;     
  const maxWidth = 1330;    
  const duration = 1500;   
  let startTime;

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  const animateScroll = (direction = "forward") => {
    startTime = null;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      const scrollVal = direction === "forward"
        ? scrollDistance * eased
        : scrollDistance * (1 - eased);
      container.scrollLeft = scrollVal;

      if (direction === "forward") {
        const widthVal = minWidth + (maxWidth - minWidth) * eased;
        divider.style.width = `${widthVal}px`;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (direction === "forward") {
          setTimeout(() => animateScroll("backward"), 50);
        }
      }
    }

    requestAnimationFrame(animate);
  };
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateScroll("forward");
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(container);

  return () => observer.disconnect();
}, []);


  return (
    <div className="huse-container">
      <section className="huse-section">
        <h1 className="huse-hero-title">
          Welcome to HUSE Circle –<br /> A hub for future entrepreneurs.
        </h1>
        <p className="huse-hero-sub">
          Learn, invest, and grow with real businesses.
        </p>
        <button className="firsthuse-btn">Join HUSE Circle</button>
      </section>

      <section className="huse-section-light">
        <p>
          If your dream is to be an entrepreneur, HUSE Circle is your launchpad.
          We’re not just a community – we’re a business playground, where ideas
          turn into reality, and learning meets real-world action.
        </p>


        <section className="transition-section">
          <div className={`slide-section ${showSecond ? "hide" : "show"}`}>
            <div className="huse-cards-row">
              <div className="huse-cards">
                <div className="card-icon"></div>
                <div className="card-title">Community Vibes</div>
                <div className="card-desc">
                  Connect, collaborate, and grow with like-minded hustlers through a vibrant community of driven entrepreneurs.
                </div>
              </div>
              <div className="huse-cards">
                <div className="card-icon"></div>
                <div className="card-title">Passive Income</div>
                <div className="card-desc">
                  Benefit from regular returns through fractional business ownership while building wealth and diversifying your investment portfolio.
                </div>
              </div>
            </div>
          </div>

          <div className={`slide-section ${showSecond ? "show" : "hide"}`}>
            <div className="huse-cards-row">
              <div className="huse-cards">
                <div className="card-icon"></div>
                <div className="card-title">Live &amp; Recorded Sessions</div>
                <div className="card-desc">
                  Gain business hacks and expert insights through live and recorded sessions to continuously learn, improve, and grow your entrepreneurial skills effectively.
                </div>
              </div>
              <div className="huse-cards">
                <div className="card-icon"></div>
                <div className="card-title">Real Time Analytics</div>
                <div className="card-desc">
                  Track your business performance with real-time analytics for smarter decisions and continuous growth insights instantly.
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="huse-section-dark">
        <h3>
          Why HUSE Circle? – Because Your <br /> Hustle Deserves More
        </h3>
        <h2>
          Tired of just watching motivational videos? Let’s actually DO business. <br />
          <br />
          HUSE Circle is where theory meets action, and your entrepreneurial dreams take shape.
        </h2>
      </section>


      <section className="huse-section-dark" ref={sectionRef}>
  <div className="huse-diff-title">What makes us different</div>
<div className="huse-divider" ref={dividerRef}></div>
  <div className="huse-diff-cards-scroll-native" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
    <div className="huse-diff-cards-fixed-container">
      <div className="huse-diff-cards-scroll" ref={scrollRef}>
        {differentiatorCards.map((card, idx) => (
          <div
            key={idx}
            className={`huse-diff-card ${animationStarted ? "card-fade-in" : "card-hidden"}`}
            style={animationStarted ? { animationDelay: `${Math.min(idx * 0.15, 0.3)}s` } : {}}
          >
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      <section className="huse-section-final">
        <h2>Join HUSE Circle and turn your passion into profit!</h2>
        <p>
          Whether you’re looking to learn, invest, or network, HUSE Circle is
          your go-to community to level up your entrepreneurial game.
          <br />
          <br />
          <br />
        </p>
        <button className="huse-btn">Join HUSE Circle</button>
      </section>

      <section className="huse-testimonials-section">
        <div className="huse-testimonials-title">
          Still thinking? Check out what our community{" "}
          <FaArrowLeft color="#222" className="arrow-left-btn" />
          <FaArrowRight color="#222" className="arrow-right-btn" />
          has to say and take the leap
        </div>
        <div className="huse-testimonials">
          <div className="huse-testimonial-card">
            <div className="huse-testimonial-text">
              HUSE Circle transformed my entrepreneurial dreams into reality.
              The mentorship and real business exposure were invaluable
            </div>
            <div className="huse-stars">★★★★★</div>
            <div className="huse-testimonial-user">
              <div
                className="huse-testimonial-avatar"
                style={{
                  background:
                    '#222 url("https://randomuser.me/api/portraits/women/1.jpg") center/cover',
                }}
              ></div>
              <span className="huse-testimonial-name">Jane Smith</span>
              <span className="huse-testimonial-role">Software Engineer</span>
            </div>
          </div>
          <div className="huse-testimonial-card">
            <div className="huse-testimonial-text">
              I never thought I could invest in businesses at such an affordable
              level. HUSE Circle made it possible
            </div>
            <div className="huse-stars">★★★★★</div>
            <div className="huse-testimonial-user">
              <div
                className="huse-testimonial-avatar"
                style={{
                  background:
                    '#222 url("https://randomuser.me/api/portraits/women/2.jpg") center/cover',
                }}
              ></div>
              <span className="huse-testimonial-name">Soniya Sunil</span>
              <span className="huse-testimonial-role">Startup Founder</span>
            </div>
          </div>
          <div className="huse-testimonial-card">
            <div className="huse-testimonial-text">
              As a newbie, I felt supported every step of the way. The mentors
              truly care about your success
            </div>
            <div className="huse-stars">★★★★★</div>
            <div className="huse-testimonial-user">
              <div
                className="huse-testimonial-avatar"
                style={{
                  background:
                    '#222 url("https://randomuser.me/api/portraits/women/3.jpg") center/cover',
                }}
              ></div>
              <span className="huse-testimonial-name">Priya Mahesh</span>
              <span className="huse-testimonial-role">Entrepreneur</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Huse;