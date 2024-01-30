import React, { useState, useEffect } from "react";
import BrochurePage from "./Section/BrochurePage";
import SolutionPage from "./Section/SolutionPage";
import "./LibraryPage.css";

const LibraryPage2 = () => {
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

  const [selectedLibraryButton, setSelectedLibraryButton] = useState(() => {
    return localStorage.getItem("selectedLibraryButton") || "BrochurePage";
  });

  useEffect(() => {
    localStorage.setItem("selectedLibraryButton", selectedLibraryButton);
  }, [selectedLibraryButton]);

  const handleLibraryButtonClick = (buttonName) => {
    setSelectedLibraryButton(buttonName);
  };

  const getButtonTextColor = (buttonName) => {
    return buttonName === selectedLibraryButton ? "blue" : "black";
  };
  return (
    <div style={containerStyle}>
      <div className="page-left" style={{ marginTop: "2rem" }}>
        <div className="library-container">
          <div className="library-title">LIBRARY</div>
          <div className="library-buttons">
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("BrochurePage"),
              }}
              onClick={() => handleLibraryButtonClick("BrochurePage")}
            >
              브로셔
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("SolutionPage"),
              }}
              onClick={() => handleLibraryButtonClick("SolutionPage")}
            >
              솔루션 소개 자료
            </button>
          </div>
        </div>
      </div>

      <div className="page-right" style={{ width: "100%", height: "85vh" }}>
        <div className="library-content">
          {selectedLibraryButton === "BrochurePage" && <BrochurePage />}
          {selectedLibraryButton === "SolutionPage" && <SolutionPage />}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage2;
