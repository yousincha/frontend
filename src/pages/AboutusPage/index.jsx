import React, { useState, useEffect } from "react";
import AboutusPage1 from "./Section/CompanyIntroPage";
import AboutusPage2 from "./Section/GreetingPage";
import AboutusPage3 from "./Section/HistoryPage";
import AboutusPage4 from "./Section/AreaPage";
import AboutusPage5 from "./Section/CustomersPage";
import AboutusPage6 from "./Section/CIPage";
import AboutusPage7 from "./Section/DirectionsPage";
import "./AboutPage.css";

const AboutPage = () => {
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
  // State to track which button is clicked for product and service separately
  const [selectedAboutButton, setSelectedAboutButton] = useState(() => {
    return localStorage.getItem("selectedAboutButton") || "회사소개";
  });

  // Function to handle product button click
  const handleAboutButtonClick = (buttonName) => {
    setSelectedAboutButton(buttonName);
  };
  const getButtonTextColor = (buttonName) => {
    return buttonName === selectedAboutButton ? "blue" : "black";
  };
  useEffect(() => {
    localStorage.setItem("selectedAboutButton", selectedAboutButton);
  }, [selectedAboutButton]);

  return (
    <div style={containerStyle}>
      <div className="page-left" style={{ marginTop: "2rem" }}>
        <div className="product-container">
          <div className="about-us">ABOUT US</div>
          <div className="product-buttons">
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("회사소개"),
              }}
              onClick={() => handleAboutButtonClick("회사소개")}
            >
              회사소개
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("인사말"),
              }}
              onClick={() => handleAboutButtonClick("인사말")}
            >
              인사말
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("연혁"),
              }}
              onClick={() => handleAboutButtonClick("연혁")}
            >
              연혁
            </button>

            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("사업영역"),
              }}
              onClick={() => handleAboutButtonClick("사업영역")}
            >
              사업영역
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("주요고객 및 파트너"),
              }}
              onClick={() => handleAboutButtonClick("주요고객 및 파트너")}
            >
              주요고객 및 파트너
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("CI소개"),
              }}
              onClick={() => handleAboutButtonClick("CI소개")}
            >
              CI소개
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("오시는 길"),
              }}
              onClick={() => handleAboutButtonClick("오시는 길")}
            >
              오시는 길
            </button>
          </div>
        </div>
      </div>

      <div className="page-right" style={{ marginRight: 0, width: "100%" }}>
        <div className="about-content">
          {selectedAboutButton === "회사소개" && <AboutusPage1 />}
          {selectedAboutButton === "인사말" && <AboutusPage2 />}
          {selectedAboutButton === "연혁" && <AboutusPage3 />}
          {selectedAboutButton === "사업영역" && <AboutusPage4 />}
          {selectedAboutButton === "주요고객 및 파트너" && <AboutusPage5 />}
          {selectedAboutButton === "CI소개" && <AboutusPage6 />}
          {selectedAboutButton === "오시는 길" && <AboutusPage7 />}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
