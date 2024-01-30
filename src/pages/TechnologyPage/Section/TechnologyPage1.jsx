import React, { useEffect, useState } from "react";
import tech_1_1 from "../../../../public/tech/tech_1.1.jpg";
import tech_1_2 from "../../../../public/tech/tech_1.2.jpg";
import tech_1_3 from "../../../../public/tech/tech_1.3.jpg";
import tech_1_4 from "../../../../public/tech/tech_1.4.jpg";

const TechnologyPage1 = () => {
  const [contentHeight, setContentHeight] = useState("700px");
  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      if (windowHeight > 500) {
        setContentHeight("100%");
      } else {
        setContentHeight("700px");
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div
        className="tech-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        TECHNOLOGY &gt; <span style={{ color: "navy" }}>2.4GHz 무선통신</span>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="tech-body"
          style={{
            marginLeft: "2rem",
            marginBottom: "4rem",
            height: contentHeight,
            flex: 1,
          }}
        >
          <ul style={{ marginRight: "10%" }}>
            <div className="tech-1" style={{ marginBottom: "2rem" }}>
              <li
                style={{
                  marginTop: "2rem",
                  fontSize: "28px",
                  color: "#1474bc",
                  fontWeight: "bold",
                }}
              >
                IEEE 802.15.4 | ZIGBEE
              </li>
              <li
                style={{
                  marginTop: "0.5rem",

                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                2.4GHz 지그비 초소형 SiP 제품 개발 및 상용화
              </li>
              <img
                src={tech_1_1}
                alt="Tech 1.1"
                style={{
                  marginBottom: "1rem",
                }}
              />
              <li
                style={{
                  marginTop: "0.5rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                지그비 통신 모듈 및 위치 인식 태그 상용화
              </li>
              <img
                src={tech_1_2}
                alt="Tech 1.2"
                style={{
                  marginBottom: "1rem",
                }}
              />{" "}
            </div>
            <hr style={{ width: "750px" }} />
            <div className="tech-2" style={{ marginBottom: "2rem" }}>
              <li
                style={{
                  marginTop: "2rem",
                  fontSize: "28px",
                  color: "#1474bc",
                  fontWeight: "bold",
                }}
              >
                Bluetooth & 4.0
              </li>
              <li
                style={{
                  marginTop: "0.5rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                IOS & Android 용 BLE 근거리 위치 인식 기기 개발
              </li>
              <img
                src={tech_1_3}
                alt="Tech 1.3"
                style={{
                  marginBottom: "1rem",
                }}
              />
              <li
                style={{
                  marginTop: "0.5rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                안드로이드 기반 microSD 무선 통신 미들웨어 개발
              </li>
              <img
                src={tech_1_4}
                alt="Tech 1.4"
                style={{
                  marginBottom: "1rem",
                }}
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage1;
