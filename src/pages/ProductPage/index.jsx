import React, { useState, useEffect } from "react";
import ProductPage1 from "./Section/ProductPage1";
import ProductPage2 from "./Section/ProductPage2";
import ProductPage3 from "./Section/ProductPage3";
import "./ProductPage.css";

const ProductPage = () => {
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

  const [selectedProductButton, setSelectedProductButton] = useState(() => {
    return localStorage.getItem("selectedProductButton") || "IoT 디바이스";
  });

  useEffect(() => {
    localStorage.setItem("selectedProductButton", selectedProductButton);
  }, [selectedProductButton]);

  const handleProductButtonClick = (buttonName) => {
    setSelectedProductButton(buttonName);
  };

  const getButtonTextColor = (buttonName) => {
    return buttonName === selectedProductButton ? "blue" : "black";
  };
  return (
    <div style={containerStyle}>
      <div className="page-left" style={{ marginTop: "2rem" }}>
        <div className="product-container">
          <div className="product-title">PRODUCT</div>
          <div className="product-buttons">
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("IoT 디바이스"),
              }}
              onClick={() => handleProductButtonClick("IoT 디바이스")}
            >
              IoT 디바이스
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("무선 통신 모듈"),
              }}
              onClick={() => handleProductButtonClick("무선 통신 모듈")}
            >
              무선 통신 모듈
            </button>
            <button
              style={{
                ...buttonStyle,
                color: getButtonTextColor("마을 무선 방송 시스템"),
              }}
              onClick={() => handleProductButtonClick("마을 무선 방송 시스템")}
            >
              마을 무선 방송 시스템
            </button>
          </div>
        </div>
      </div>

      <div className="page-right" style={{ marginRight: 0, width: "100%" }}>
        <div className="product-content">
          {selectedProductButton === "IoT 디바이스" && <ProductPage1 />}
          {selectedProductButton === "무선 통신 모듈" && <ProductPage2 />}
          {selectedProductButton === "마을 무선 방송 시스템" && (
            <ProductPage3 />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
