import React from "react";
import video from "../../assets/videoplayback.mp4";
import Heading from "../../assets/Mpheadline.png";
import "./Main.css";
const Main = () => {
  return (
    <div className="herosection overflow-hidden">
      <video id="bgVideo" loop muted autoPlay src={video}></video>
      <div className="headings">
        <h2>Welcome to </h2>
        <img src={Heading} alt="heading" />
        <h1>Create. Advertise. Grow.</h1>
        <p>
          MP Advertisers is a full-service digital advertising and branding
          agency based in India. We specialize in turning ideas into bold
          campaigns, helping brands stand out and connect with their audience.
          Passionate about creativity, strategy, and measurable results — we
          make marketing simple, effective, and powerful.
        </p>
      </div>
    </div>
  );
};

export default Main;
