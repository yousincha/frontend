import React, { useEffect, useState } from "react";
import tech_3_1 from "../../../../public/tech/tech_3.1.jpg";
import tech_3_2 from "../../../../public/tech/tech_3.2.jpg";
import tech_3_3 from "../../../../public/tech/tech_3.3.jpg";

const TechnologyPage3 = () => {
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
        TECHNOLOGY &gt; <span style={{ color: "navy" }}>네트워크 프로토콜</span>
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
                보유 기술
              </li>
              <li
                style={{
                  marginTop: "0.5rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                IEEE 802.15.4 프로토콜 개발 및 IEEE 805.15.4a 측위 프로토콜 개발
              </li>
              <img
                src={tech_3_1}
                alt="Tech 3.1"
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
                IP over ZigBee 프로토콜 개발 경험 보유
              </li>
              <img
                src={tech_3_2}
                alt="Tech 3.2"
                style={{
                  marginBottom: "1rem",
                }}
              />
            </div>
            <hr style={{ width: "750px" }} />
            <div className="tech-ex" style={{ marginBottom: "2rem" }}>
              <li
                style={{
                  marginTop: "2rem",
                  fontSize: "20px",
                  color: "#1474bc",
                  fontWeight: "bold",
                }}
              >
                적용사례
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                <ul
                  style={{
                    color: "black", // 텍스트의 색상을 검정색으로 지정
                  }}
                >
                  <li
                    style={{
                      marginTop: "0.5rem",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    KCTC 여단급 훈련장 장비 무선화
                    <br />
                    프로토콜 개발 공급
                  </li>
                  <li>
                    <span style={{ color: "#F34998" }}>● </span>병사장비 무선
                    네트워크
                  </li>
                  <li>
                    <span style={{ color: "#F34998" }}>● </span>장거리 화기 모의
                  </li>
                </ul>
                <img
                  src={tech_3_3}
                  alt="Tech 3.3"
                  style={{ marginLeft: "1rem", maxWidth: "100%" }} // 이미지를 왼쪽으로 위치하도록 설정
                />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage3;
