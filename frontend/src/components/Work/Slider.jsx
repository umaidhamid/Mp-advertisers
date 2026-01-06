import React, { useState, useEffect, useRef } from "react";
import styles from "./ImageSlider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/Images/SLIDES/SLIDE 1.webp";
import img2 from "../../assets/Images/SLIDES/SLIDE 2.webp";
import img3 from "../../assets/Images/SLIDES/SLIDE 3.webp";
import img4 from "../../assets/Images/SLIDES/SLIDE 4.webp";

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className={styles.slider}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Slides */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          className={`${styles.image} ${i === index ? styles.active : ""}`}
          loading="lazy"
        />
      ))}

      {/* Navigation */}
      <button
        className={`${styles.navBtn} ${styles.left}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button
        className={`${styles.navBtn} ${styles.right}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
