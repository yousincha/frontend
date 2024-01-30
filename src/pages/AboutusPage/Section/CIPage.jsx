import React, { useEffect, useState } from "react";
import Areaimg from "../../../../public/logo.png";
import logo_1 from "../../../../public/logo_color1.png";
import logo_2 from "../../../../public/logo_color2.png";

const CIPage = () => {
  const [contentHeight, setContentHeight] = useState("700px");

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      if (windowHeight > 500) {
        setContentHeight("800px");
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
        className="ci-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        ABOUT US &gt; <span style={{ color: "navy" }}>CI 소개</span>
      </div>
      <div
        style={{
          marginLeft: "2rem",
          marginBottom: "4rem",
          height: contentHeight,
        }}
      >
        <ul style={{ marginRight: "30%" }}>
          <li style={{ marginTop: "2rem" }}>
            <img
              src={Areaimg}
              alt="VillivMicron Ventures"
              style={{ width: "100px" }}
            />
          </li>
          <li style={{ marginTop: "2rem" }}>
            빌리브마이크론은 혁신과 도전의 정신을 바탕으로 한 첨단 기술을
            기반으로, 끊임없는 연구와 개발을 통해 글로벌 시장에서 선도적인
            위치를 유지하고 있습니다. 회사의 CI는 뛰어난 품질과 창의성을
            상징하며, 이를 통해 현재와 미래의 가치를 향상시키는 일류 기업으로
            나아가고 있습니다.
          </li>
          <li style={{ marginTop: "2rem" }}>
            <span
              style={{
                color: "#1474bc",
                fontWeight: "bold",
              }}
            >
              청록색
            </span>
            은 빌리브마이크론의 상징적인 색으로, 열정적이고 혁신적인 기업 정신을
            상징합니다. 이 색은 회사의 비전과 미래 성장에 대한 약속을 대표하며,
            글로벌 시장에서 빌리브마이크론의 독보적인 지위를 강화하는 데
            기여하고 있습니다.
          </li>
          <li style={{ marginTop: "2rem" }}>
            <span
              style={{
                color: "#13315e",
                fontWeight: "bold",
              }}
            >
              네이비색
            </span>
            은 안정감과 신뢰성을 대표하여, 빌리브마이크론이 제공하는 제품과
            서비스에 대한 고객의 신뢰를 구축하는 데 기여하고 있습니다.
          </li>
          <li style={{ marginTop: "2rem" }}>
            빌리브마이크론은 과학 기술과 높은 표준의 품질 제어를 바탕으로 지속
            가능한 혁신을 실현하며, 고객들에게 가치 있는 경험을 제공합니다.
            더불어 빌리브마이크론은 사회적 책임을 다하며 지속 가능한 발전을
            추구하여, 글로벌 비즈니스 환경에서 영향력 있는 기업으로 거듭나고
            있습니다.
          </li>
          <hr style={{ marginTop: "2rem", color: "#ccc" }} />
          <span
            style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
          >
            <li>
              <img
                src={logo_1}
                alt="VillivMicron logo_color1"
                style={{ width: "35px" }}
              />
            </li>
            <span
              style={{
                marginLeft: "8px",
                color: "#1474bc",
                fontWeight: "bold",
              }}
            >
              BLUE : #1474bc RGB(20,116,188)
            </span>
          </span>
          <span
            style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}
          >
            <li>
              <img
                src={logo_2}
                alt="VillivMicron logo_color2"
                style={{ width: "35px" }}
              />
            </li>
            <span
              style={{
                marginLeft: "8px",
                color: "#13315e",
                fontWeight: "bold",
              }}
            >
              NAVY : #13315e RGB(19,49,94)
            </span>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default CIPage;
