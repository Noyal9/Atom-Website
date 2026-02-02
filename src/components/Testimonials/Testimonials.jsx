import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text: "ATOM transformed our idea into a fully working product. Amazing experience!",
  },
  {
    name: "Priya Singh",
    role: "Business Owner",
    text: "Professional team, great support, and fast delivery. Highly recommended!",
  },
  {
    name: "Amit Verma",
    role: "Product Manager",
    text: "Their AI solutions helped automate our entire workflow.",
  },
  {
    name: "Sneha Patel",
    role: "Entrepreneur",
    text: "Beautiful UI, strong backend, and excellent communication.",
  },
  {
    name: "Karan Mehta",
    role: "CTO",
    text: "ATOM delivers quality work every single time.",
  }
];

function Testimonials() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const getCard = (offset) => {
    return testimonialsData[
      (index + offset + testimonialsData.length) %
        testimonialsData.length
    ];
  };

  return (
    <section className="testimonials">

      {/* Heading */}
      <span className="testi-badge">Client Testimonials</span>

      <h2 className="title">
        What <span>people</span> say about us!
      </h2>

      {/* Slider */}
      <div className="slider">

        <button className="arrow left" onClick={prevSlide}>❮</button>

        <div className="cards">

          <div className="card small">
            <p>{getCard(-1).text}</p>
            <h4>{getCard(-1).name}</h4>
            <span>{getCard(-1).role}</span>
          </div>

          <div className="card active">
            <p>{getCard(0).text}</p>
            <h4>{getCard(0).name}</h4>
            <span>{getCard(0).role}</span>
          </div>

          <div className="card small">
            <p>{getCard(1).text}</p>
            <h4>{getCard(1).name}</h4>
            <span>{getCard(1).role}</span>
          </div>

        </div>

        <button className="arrow right" onClick={nextSlide}>❯</button>

      </div>

      {/* Dots */}
      <div className="dots">
        {testimonialsData.slice(0,3).map((_, i) => (
          <span
            key={i}
            className={i === index % 3 ? "dot active-dot" : "dot"}
          ></span>
        ))}
      </div>

    </section>
  );
}

export default Testimonials;
