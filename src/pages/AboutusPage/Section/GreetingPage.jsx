import React, { useEffect, useState } from "react";
import GP_1 from "../../../../public/gp_1.png";

const GreetingPage = () => {
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
        className="greeting-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        ABOUT US &gt; <span style={{ color: "navy" }}>인사말</span>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="greeting-left"
          style={{
            marginLeft: "2rem",
            marginBottom: "4rem",
            height: contentHeight,
            flex: 1,
          }}
        >
          <ul style={{ marginRight: "40%" }}>
            <li
              style={{
                marginTop: "2rem",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "#1474bc" }}>
                USN CONVERGENCE & MOBILE CONNECTIVITY
              </span>
              를
              <br />
              MESSAGE 향한 열정과 노력의 산실
            </li>
            <li style={{ marginTop: "2rem" }}>
              &quot;USN CONVERGENCE &amp; MOBILE CONNECTIVITY&quot;을 지향하는
              빌리브마이크론(주) 2012년 창립된
              <br />
              기술벤처회사로서 SIP &amp; SOP APPLICATION MODULE 기술과 더불어
              2.4GHZ 및 900MHZ 무선통신 <br />
              시스템 설계/제작기술, 네트워크 프로토콜 설계, IOS 및 안드로이드
              플랫폼 등 다양한 기술적 경험과 <br />
              노하우를 축적하고 있습니다.
            </li>
            <li style={{ marginTop: "2rem" }}>
              또한 USN/M2M 사업분야 및 MEMS 공정, 센서 공정, CMOS 공정, RF 공정
              등 다양한 반도체 소자 제작 <br />
              기술과 집적화 설계 기술을 보유하고 있으며 과감한 투자와 지속적인
              연구개발, 끊임없는 노력을 바탕으로 <br />
              창조적인 글로벌 기업이 되도록 노력하겠습니다.
            </li>
            <li style={{ marginTop: "2rem" }}>
              고객의 신뢰와 믿음은 기업의 성장동력이며 밑거름입니다.
            </li>
            <li style={{ marginTop: "2rem" }}>
              빌리브마이크론(주)는 고객만족을 위한 전문기술 집단으로 거듭나기
              위해 끊임없는 노력을 다 할 것입니다.
            </li>
            <li style={{ marginTop: "2rem" }}>감사합니다.</li>
            <div
              className="greeting-img"
              style={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                width: "700px",
              }}
            >
              <div style={{ flex: 1 }}>
                <li>
                  대표이사{" "}
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    엄재홍
                  </span>
                </li>
              </div>
              <img
                src={GP_1}
                alt="VillivMicron Ventures"
                style={{ width: "300px", marginLeft: "1rem" }}
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GreetingPage;
