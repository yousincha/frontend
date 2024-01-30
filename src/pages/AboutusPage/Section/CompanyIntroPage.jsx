import React, { useEffect, useState } from "react";

const CompanyIntroPage = () => {
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
        className="companyintro-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        ABOUT US &gt; <span style={{ color: "navy" }}>회사 소개</span>
      </div>
      <div
        style={{
          marginLeft: "2rem",
          marginBottom: "4rem",
          height: contentHeight,
        }}
      >
        <ul style={{ marginRight: "40%" }}>
          <li style={{ marginTop: "2rem" }}>
            빌리브마이크론은 혁신적인 무선 통신 기술을 바탕으로 다양한 분야에서
            선도적인 역할을 하는 기업입니다.
            <br />
            저희는 연결성의 새로운 패러다임을 제시하며, 최첨단 솔루션을 통해
            고객들에게 더 나은 무선 통신 경험을 제공하고 있습니다.
          </li>
          <li style={{ marginTop: "2rem" }}>
            우리는 2012년에 시작된 이래로 꾸준한 연구와 개발을 통해 무선 통신
            기술의 선두주자로서의 지위를 굳건히 하고 있습니다. <br />
            무선 모듈, IoT 디바이스, 그리고 통신 플랫폼에 대한 풍부한 경험을
            기반으로, 빌리브마이크론은 현재와 미래의 통신환경에 적합한 <br />
            혁신적인 솔루션을 개발하고 있습니다.
          </li>
          <li style={{ marginTop: "2rem" }}>
            우리는 열린 마음으로 다양한 산업 분야에서의 협업을 즐깁니다.
            고객들과의 긴밀한 소통을 통해 우리의 기술을 지속적으로 발전시키며,{" "}
            <br />
            신뢰와 협력의 관계를 유지합니다. 빌리브마이크론은 미래의 연결성을
            위해 끊임없이 노력하며, 사회적 가치 창출을 위한 다양한 프로젝트에도{" "}
            <br />
            적극 참여하고 있습니다.
          </li>
          <li style={{ marginTop: "2rem" }}>
            당사의 페이지를 통해 더 많은 정보를 확인하시고, 빌리브마이크론과
            함께하는 혁신적인 여정에 동참해 주시기를 바랍니다. <br />
            빌리브마이크론은 항상 미래의 무선 통신을 선도하고자 최선의 노력을
            기울이고 있습니다.
          </li>
          <li
            style={{ marginTop: "2rem", fontWeight: "bold", color: "#1474bc" }}
          >
            회사명
          </li>
          <li>(주)빌리브마이크론(VILLV MICRON., LTD.)</li>
          <li
            style={{ marginTop: "2rem", fontWeight: "bold", color: "#1474bc" }}
          >
            대표이사명
          </li>
          <li>엄재홍</li>
          <li
            style={{ marginTop: "2rem", fontWeight: "bold", color: "#1474bc" }}
          >
            설립일
          </li>
          <li>2012.03</li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyIntroPage;
