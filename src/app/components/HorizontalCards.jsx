"use client";

import { useRef, useState } from "react";
import "../styles/HorizontalCards.css";

const cards = [
  {
    id: 1,
    title: "Comming Soon",
    description: "",
  },
  {
    id: 2,
    title: "Comming Soon",
    description: "",
  },
  {
    id: 3,
    title: "Comming Soon",
    description: "",
  },
  {
    id: 4,
    title: "Comming Soon",
    description: "",
  },
  {
    id: 5,
    title: "Comming Soon",
    description: "",
  },
  {
    id: 6,
    title: "Comming Soon",
    description: "",
  },
  {
    id: 7,
    title: "Comming Soon",
    description: "",
  }
];

export default function HorizontalCards() {
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);

    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <section className="cards-section">

      {/* Neon cover */}
      <div className="cards-cover">

        {/* Horizontal slider */}
        <div
          ref={sliderRef}
          className={`cards-slider ${
            isDragging ? "dragging" : ""
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >

          <div className="cards-track">

            {cards.map((card) => (
              <article className="card" key={card.id}>

                <h2>{card.title}</h2>

                <p>{card.description}</p>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}