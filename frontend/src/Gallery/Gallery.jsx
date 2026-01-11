import React from "react";
import InfiniteMenu from "../../animation/InfiniteMenu"; // ✅ keep only one import

import img1 from "../assets/Images/SLIDES/SLIDE 1.webp";

import img2 from "../assets/Images/SLIDES/SLIDE 2.webp";
import img3 from "../assets/Images/SLIDES/SLIDE 3.webp";
import img4 from "../assets/Images/SLIDES/SLIDE 4.webp";
import img5 from "../assets/Logo.png";
import img6 from "../assets/Slider.jpeg";

const items = [
  {
    image: img1,
    link: "https://google.com/",
    title: "High-Quality Print Solutions",
    description: "Precision printing with rich colors and flawless finishes that elevate your brand presence.",
  },
  {
    image: img2,
    link: "https://google.com/",
    title: "Creative Branding Designs",
    description: "Thoughtfully crafted designs that tell your brand story and leave a lasting impression.",
  },
  {
    image: img3,
    link: "https://google.com/",
    title: "Large Format Displays",
    description: "Bold, eye-catching visuals designed to stand out in any environment or campaign.",
  },
  {
    image: img4,
    link: "https://google.com/",
    title: "Marketing & Advertising Prints",
    description: "Impactful print materials that help your message reach the right audience effectively.",
  },
  {
    image: img5,
    link: "https://google.com/",
    title: "Custom Stickers & Labels",
    description: "Durable, vibrant stickers and labels tailored to match your brand identity perfectly.",
  },
  {
    image: img6,
    link: "https://google.com/",
    title: "Professional Photo Printing",
    description: "Sharp, color-accurate photo prints that bring your moments and visuals to life.",
  },
];


const Gallery = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <InfiniteMenu items={items} />
    </div>
  );
};

export default Gallery;
