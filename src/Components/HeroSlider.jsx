import { useState } from "react";
import "../Styles/HeroSlider.css";

const slides = [
  {
    image: "https://swastikwellbeing.com/wp-content/uploads/2026/01/swastik-slider-6.webp",
    text: "This is where you slow down",
  },
  {
    image: "https://swastikwellbeing.com/wp-content/uploads/2026/01/swastik-slider-6.webp",
    text: "Experience luxury living",
  },
  {
    image: "https://swastikwellbeing.com/wp-content/uploads/2026/01/swastik-slider-6.webp",
    text: "Reconnect with nature",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h1>{slide.text}</h1>
          </div>
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}