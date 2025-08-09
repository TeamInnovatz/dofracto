import { useEffect, useRef, useState } from "react";
import animationVideo from "../assets/animation.mp4";
import "./home.css";
import Features from "./features";
import Listings from "./listings";
import Intro from "./intro";
import Vision from "./VisionAndMission";

export default function Home() {
  const [step, setStep] = useState(0);
  const [mainSectionStep, setMainSectionStep] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }

    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 4500),
      setTimeout(() => setStep(4), 5300),
      setTimeout(() => setMainSectionStep(1), 17000),
      setTimeout(() => setMainSectionStep(2), 25000),
      setTimeout(() => setMainSectionStep(3), 30000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="home-container">
      <video
        ref={videoRef}
        className={`bg-video ${step >= 1 ? "fade-out-video" : "fade-in-video"}`}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        src={animationVideo}
      />

      {step < 2 ? (
        <div className="intro-section">
          <h1 className={`dofracto-text ${step >= 1 ? "fade-out" : "fade-in"}`}>
            DOFRACTO
          </h1>
        </div>
      ) : (
        <div className={`main-section ${step >= 3 ? "fade-out-main" : ""}`}>
          <h1 className="main-title">DOFRACTO</h1>
          <button className="start-btn">Starts At ₹30,000*</button>
          <p>Own a Piece, No matter the Price</p>
        </div>
      )}

      {step >= 4 && mainSectionStep === 0 && (
        <div className="features-overlay">
          <Features />
        </div>
      )}

      {mainSectionStep === 1 && (
        <div
          className="anim-section-enter"
          style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: 10 }}
        >
          <Listings />
        </div>
      )}
      {mainSectionStep === 3 && (
        <div
          className="anim-section-enter"
          style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: 10 }}
        >
          <Intro />
        </div>
      )}
      {mainSectionStep === 2 && (
        <div
          className="anim-section-enter"
          style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: 10 }}
        >
          <Vision />
        </div>
      )}
    </div>
  );
}
