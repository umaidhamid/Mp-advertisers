import React from "react";
const MapSection = () => {
  const mapLink =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.025067312882!2d74.8295589!3d34.017567500000006!2m3!1f0!https://maps.app.goo.gl/8mkpm5o7K3m6MEdk8!3f0!3m2!1i1024!2i768!4f13";
  const googleMapClickLink = "https://maps.app.goo.gl/8mkpm5o7K3m6MEdk8";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //   margin:" 10vh ",
        width: "100%",
        height: "350px",
      }}
    >
      <a
        href={googleMapClickLink}
        target="My map "
        rel="noopener noreferrer"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <iframe
          title="MP Advertisers Location"
          width="100%"
          height="120%"
          style={{ border: 0, pointerEvents: "none" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.025067312882!2d74.8295589!3d34.017567500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f73e7aec7ab%3A0xb9be760e73ea35ce!2sMP%20Advertisers!5e0!3m2!1sen!2sin!4v1761542575986!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </a>
    </div>
  );
};

export default MapSection;
