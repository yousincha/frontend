import React, { useState, useEffect } from "react";
import TechnologyPage1 from "./Section/TechnologyPage1";
import TechnologyPage2 from "./Section/TechnologyPage2";
import TechnologyPage3 from "./Section/TechnologyPage3";
import TechnologyPage4 from "./Section/TechnologyPage4";

import "./Technology.css";

const TechnologyPage = () => {
  const containerStyle = {
    display: "flex",
    gap: 10,
  };
  const buttonStyle = {
    width: "250px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "0",
    marginTop: "0.5rem",
    padding: "0.2rem",
    marginLeft: "0.2rem",
    textAlign: "center",
  };

  const [selectedTechButton, setSelectedTechButton] = useState(() => {
    return localStorage.getItem("selectedTechButton") || "2.4GHz 무선통신";
  });

  useEffect(() => {
    localStorage.setItem("selectedTechButton", selectedTechButton);
  }, [selectedTechButton]);

  const handleTechButtonClick = (buttonName) => {
    setSelectedTechButton(buttonName);
  };

  const getButtonTextColor = (buttonName) => {
    return buttonName === selectedTechButton ? "blue" : "black";
  };
  return (
    <div style={containerStyle}>
      <div className="page-left" style={{ marginTop: "2rem" }}>
        <div className="tech-container">
          <div className="tech-title">TECHNOLOGY</div>
          <div className="tech-buttons">
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("2.4GHz 무선통신"),
              }}
              onClick={() => handleTechButtonClick("2.4GHz 무선통신")}
            >
              2.4GHz 무선통신
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("900MHz 무선통신"),
              }}
              onClick={() => handleTechButtonClick("900MHz 무선통신")}
            >
              900MHz 무선통신
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("네트워크 프로토콜"),
              }}
              onClick={() => handleTechButtonClick("네트워크 프로토콜")}
            >
              네트워크 프로토콜
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("모바일 APP"),
              }}
              onClick={() => handleTechButtonClick("모바일 APP")}
            >
              모바일 APP
            </button>
          </div>
        </div>
      </div>

      <div className="page-right" style={{ width: "100%", height: "100%" }}>
        <div className="tech-content">
          {selectedTechButton === "2.4GHz 무선통신" && <TechnologyPage1 />}
          {selectedTechButton === "900MHz 무선통신" && <TechnologyPage2 />}
          {selectedTechButton === "네트워크 프로토콜" && <TechnologyPage3 />}
          {selectedTechButton === "모바일 APP" && <TechnologyPage4 />}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
