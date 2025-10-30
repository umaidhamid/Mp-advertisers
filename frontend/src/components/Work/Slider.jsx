import React, { useState, useEffect } from "react";
import style from "./ImageSlider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/Images/SLIDES/SLIDE 1.webp";
import img2 from "../../assets/Images/SLIDES/SLIDE 2.webp";
import img3 from "../../assets/Images/SLIDES/SLIDE 3.webp";
import img4 from "../../assets/Images/SLIDES/SLIDE 4.webp";
// import img5 from "../../assets/Images/SLIDES/SLIDE 5.webp";
const ImageSlider = () => {
  //   const images = [
  //     "../../assets/Images/shahid sir.webp",
  //     "../../assets/Images/OwaisBhat.webp",
  //     "../../assets/Images/Logo.png",
  //   ];
  const images = [img1, img2, img3,img4];
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={style.slider}>
      {/* Left button */}
      <button className={`${style.navBtn} ${style.left}`} onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Image */}
      <img src={images[index]} alt="slide" className={style.image} />

      {/* Right button */}
      <button className={`${style.navBtn} ${style.right}`} onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Dots navigation */}
      <div className={style.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`${style.dot} ${i === index ? style.active : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
