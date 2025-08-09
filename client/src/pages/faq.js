import React, { useState } from "react";
import "./FaqAccordion.css";

export default function FaqAccordion() {
  const faqData = [
    {
      question: "What is fractional ownership?",
      answer:
        "Fractional ownership allows you to invest in and own a percentage of a business...",
    },
    {
      question: "How much do I need to invest?",
      answer:
        "The minimum investment amount depends on the specific opportunity...",
    },
    {
      question: "Who manages the businesses I invest in?",
      answer:
        "Management is usually handled by professionals or the platform itself...",
    },
    {
      question: "How do I track my investment performance?",
      answer:
        "Use the dashboard provided by your investment platform for updates...",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((item, idx) => (
          <div key={idx} className="faq-item">
            <div className="faq-question" onClick={() => toggle(idx)}>
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === idx ? "−" : "+"}
              </span>
            </div>
            {openIndex === idx && item.answer && (
              <div className="faq-answer">{item.answer}</div>
            )}
            {idx < faqData.length - 1 && <hr className="faq-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
}