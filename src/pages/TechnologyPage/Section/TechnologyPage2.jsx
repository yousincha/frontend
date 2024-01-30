import React, { useEffect, useState } from "react";
import tech_2_1 from "../../../../public/tech/tech_2.1.jpg";
import tech_2_2 from "../../../../public/tech/tech_2.2.jpg";
import tech_2_3 from "../../../../public/tech/tech_2.3.jpg";
import tech_2_4 from "../../../../public/tech/tech_2.4.jpg";

const TechnologyPage2 = () => {
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
        TECHNOLOGY &gt; <span style={{ color: "navy" }}>900MHz 무선통신</span>
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
                900MHz RFID
              </li>
              <li
                style={{
                  marginTop: "0.5rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                900MHz RFID USIM 카드 개발 및 상용화
              </li>
              <img
                src={tech_2_1}
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
                Bluetooth 900MHz RFID 리더기 ODM 개발 및 응용 어플리케이션 개발
              </li>
              <img
                src={tech_2_2}
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
                회로 및 부품 설계 기술
              </li>
              <li
                style={{
                  marginTop: "0.5rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                RF 통합 SiP 설계 및 부품 설계
              </li>
              <img
                src={tech_2_3}
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
                초소형 회로에서의 신호/전원/RF 전송선 회로 설계 및 ADS/FHSS 기반
                회로 해석 기술
              </li>
              <img
                src={tech_2_4}
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

export default TechnologyPage2;
