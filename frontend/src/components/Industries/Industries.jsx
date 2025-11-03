import React from "react";
import "./Industries.css";
import agriIcon from "../../assets/Images/INDUSTRIES/AGREECALTURE.webp";
import constructionIcon from "../../assets/Images/INDUSTRIES/CONSTRUCTION.webp";
import educationIcon from "../../assets/Images/INDUSTRIES/Education.webp";
import foodIcon from "../../assets/Images/INDUSTRIES/FOOD AND BEVRAGES.webp";
import cosmeticsIcon from "../../assets/Images/INDUSTRIES/PERSONAL CARE.webp";
import miningIcon from "../../assets/Images/INDUSTRIES/MINING.webp";
import wholesaleIcon from "../../assets/Images/INDUSTRIES/WHOLESALE TRADE.webp";
import buildersIcon from "../../assets/Images/INDUSTRIES//HOME BUILDERS.webp";
import automotiveIcon from "../../assets/Images/INDUSTRIES/AUTOMETIVE.webp";
import healthcareIcon from "../../assets/Images/INDUSTRIES/HEALTH CARE.webp";
import govtIcon from "../../assets/Images/INDUSTRIES/COUNCEL GOVERNMENT.webp";
import wasteIcon from "../../assets/Images/INDUSTRIES/WASE MANAGEMENT.webp";
import retailIcon from "../../assets/Images/INDUSTRIES/RETAIL.webp";
import eventIcon from "../../assets/Images/INDUSTRIES/EVENT NMANAGEMENT.webp";
import manufacturingIcon from "../../assets/Images/INDUSTRIES/MANUFACTURING.webp";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <section className="industries-section">
      <h1
        id="backbtn"
        onClick={(e) => {
          navigate("/Home");
        }}
      >
        back
      </h1>
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
