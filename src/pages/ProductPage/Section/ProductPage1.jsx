import React, { useState, useEffect } from "react";

const ProductPage1 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imageImports = await Promise.all(
        Array.from({ length: 100 }, (_, i) =>
          import(`../../../../public/pd_1.0${i + 1}.png`).then(
            (module) => module.default
          )
        )
      );
      setImages(imageImports);
    };

    importImages();
  }, []);

  const cellStyle = {
    marginBottom: "2rem",
    marginRight: "2rem",
    width: "360px",
    height: "190px",
    textAlign: "left",
    border: "1px solid #ccc",
  };

  const imgStyle = {
    width: "150px",
    margin: "auto",
    display: "block",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };

  const liStyle = {
    textAlign: "center",
    width: "360px",
    fontWeight: "bold",
    backgroundColor: "rgba(144, 144, 144, 0.6)",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "white",
  };

  const productItems = [
    "스마트홈-SOS버튼 (WIFI)",
    "스마트홈-도어센서 (WIFI)",
    "스마트홈-홈브릿지 (WIFI)",
    "스마트홈-스마트스위치",
    "스마트홈-스마트플러그",
    "11번가 스마트쇼핑 버튼 (WIFI)",
    "교과부 등하교 서비스 적용 (ZIGBEE)",
    "경찰청 어린이 안심 서비스 적용 (BLE 4.2)",
    "스마트 마을 방송 단말기 (LTE-M)",
    "GPS Tracker",
    "Bio Secure 토큰",
    "국세청 주류진품단말기 (UHF RFID)",
  ];

  return (
    <div>
      <div
        className="product-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        PRODUCT &gt; <span style={{ color: "navy" }}>IoT 디바이스</span>
      </div>
      <div
        className="product-body"
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "2rem",
          marginBottom: "4rem",
          marginLeft: "2rem",
        }}
      >
        <div className="product-Right">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {productItems.map((item, index) => (
              <div key={index} style={cellStyle}>
                <div style={contentStyle}>
                  <ul>
                    <li style={liStyle}>{item}</li>
                  </ul>
                  <img
                    src={images[index]}
                    alt={`pd_1.0${index + 1}`}
                    style={imgStyle}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage1;
