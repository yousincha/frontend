import React, { useEffect, useState } from "react";
import Areaimg from "../../../../public/area.png";
const AreaPage = () => {
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
        className="area-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        ABOUT US &gt; <span style={{ color: "navy" }}>사업영역</span>
      </div>
      <div
        style={{
          marginLeft: "2rem",
          marginBottom: "2rem",
          height: contentHeight,
        }}
      >
        <ul style={{ marginRight: "40%" }}>
          <li style={{ marginTop: "4rem" }}>
            빌리브 마이크론은 뛰어난 기술력과 혁신적인 아이디어를 기반으로
            다양한 사업 영역에서 성공적인 활동을 펼치고 있습니다. 주요 사업
            영역으로는 무선 통신 기술, IoT (사물 인터넷) 디바이스 및 솔루션,
            플랫폼 개발 등이 있습니다. 우리는 고객의 다양한 요구에 부응하며 현대
            사회에서 필수적인 기술 분야에서 선도적인 위치를 차지하고 있습니다.
            빌리브 마이크론은 항상 변화하는 기술 환경에서 최고의 서비스와 제품을
            제공하기 위해 노력하고 있습니다.
          </li>
          <li style={{ marginTop: "4rem" }}>
            <img
              src={Areaimg}
              alt="VillivMicron area"
              style={{ width: "70%" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AreaPage;
