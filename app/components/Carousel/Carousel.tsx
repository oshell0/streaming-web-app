"use client";
import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./carousel.module.css";

const images = [
    "/pic1.jpg",
    "/pic2.jpg",
    "/pic3.jpg",
    "/pic4.jpg",
    "/pic5.jpg",
    "/pic6.jpg",
];

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.arrow} onClick={() => scroll("left")}>
        <ChevronLeft size={28} />
      </button>

      <div className={styles.carousel} ref={scrollRef}>
        {images.map((src, i) => (
          <div key={i} className={styles.imageContainer}>
            <img src={src} alt={`img-${i}`} className={styles.image} />
          </div>
        ))}
      </div>

      <button className={styles.arrow} onClick={() => scroll("right")}>
        <ChevronRight size={28} />
      </button>
    </div>
  );
}