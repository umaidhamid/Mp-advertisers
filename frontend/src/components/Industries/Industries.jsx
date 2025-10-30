import React from "react";
import "./Industries.css";

// import agriIcon from "../../assets/icons/agriculture.png";
// import constructionIcon from "../../assets/icons/construction.png";
// import educationIcon from "../../assets/icons/education.png";
// import foodIcon from "../../assets/icons/food.png";
// import cosmeticsIcon from "../../assets/icons/cosmetics.png";
// import miningIcon from "../../assets/icons/mining.png";
// import wholesaleIcon from "../../assets/icons/wholesale.png";
// import buildersIcon from "../../assets/icons/builders.png";
// import automotiveIcon from "../../assets/icons/automotive.png";
// import healthcareIcon from "../../assets/icons/healthcare.png";
// import govtIcon from "../../assets/icons/government.png";
// import wasteIcon from "../../assets/icons/waste.png";
// import retailIcon from "../../assets/icons/retail.png";
// import eventIcon from "../../assets/icons/event.png";
// import manufacturingIcon from "../../assets/icons/manufacturing.png";
import agriIcon from "../../assets/Images/INDUSTRIES/AGREECALTURE.webp";
import constructionIcon from "../../assets/Images/INDUSTRIES/AUTOMETIVE.webp";
import educationIcon from "../../assets/icons/Logo.png";
import foodIcon from "../../assets/icons/Logo.png";
import cosmeticsIcon from "../../assets/icons/Logo.png";
import miningIcon from "../../assets/icons/Logo.png";
import wholesaleIcon from "../../assets/icons/Logo.png";
import buildersIcon from "../../assets/icons/Logo.png";
import automotiveIcon from "../../assets/Images/INDUSTRIES/AUTOMETIVE.webp";
import healthcareIcon from "../../assets/icons/Logo.png";
import govtIcon from "../../assets/icons/Logo.png";
import wasteIcon from "../../assets/icons/Logo.png";
import retailIcon from "../../assets/icons/Logo.png";
import eventIcon from "../../assets/icons/Logo.png";
import manufacturingIcon from "../../assets/icons/Logo.png";

const industries = [
  { name: "Agriculture", icon: agriIcon },
  { name: "Construction", icon: constructionIcon },
  { name: "Education", icon: educationIcon },
  { name: "Food & Beverage", icon: foodIcon },
  { name: "Personal Care & Cosmetics", icon: cosmeticsIcon },
  { name: "Mining", icon: miningIcon },
  { name: "Wholesale Trade", icon: wholesaleIcon },
  { name: "Home Builders", icon: buildersIcon },
  { name: "Automotive", icon: automotiveIcon },
  { name: "Health Care", icon: healthcareIcon },
  { name: "Council / Government", icon: govtIcon },
  { name: "Waste Management", icon: wasteIcon },
  { name: "Retail", icon: retailIcon },
  { name: "Event Management", icon: eventIcon },
  { name: "Manufacturing", icon: manufacturingIcon },
];

const Industries = () => {
  return (
    <section className="industries-section">
      <h1 className="industries-title">Industries We Serve</h1>

      <div className="industries-grid">
        {industries.map((item, index) => (
          <div className="industry-card" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
