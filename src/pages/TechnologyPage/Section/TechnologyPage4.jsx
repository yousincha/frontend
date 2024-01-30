import React, { useEffect, useState } from "react";
import tech_4_1 from "../../../../public/tech/tech_4.1.jpg";
import tech_4_2 from "../../../../public/tech/tech_4.2.jpg";
import tech_4_3 from "../../../../public/tech/tech_4.3.jpg";
import tech_4_4 from "../../../../public/tech/tech_4.4.jpg";
import tech_4_5 from "../../../../public/tech/tech_4.5.jpg";

const TechnologyPage4 = () => {
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
        TECHNOLOGY &gt; <span style={{ color: "navy" }}>모바일 APP</span>
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
              <ul
                style={{
                  listStyleType: "none",
                  marginLeft: "1.2rem",
                  color: "black",
                }}
              >
                <li
                  style={{
                    fontSize: "18px",
                    marginTop: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "720px",
                    }}
                  >
                    <div
                      className="tech4-1-left"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <img
                        src={tech_4_1}
                        alt="Tech 4.1"
                        style={{ height: "250px" }}
                      />
                      <li style={{ fontWeight: "bold" }}>
                        모바일{" "}
                        <span style={{ color: "gray" }}>
                          APP 개발
                          <br />
                          (Open OS 기반)
                        </span>
                      </li>
                    </div>
                    <img
                      src={tech_4_5}
                      alt="Tech 4.5"
                      style={{ height: "250px", marginBottom: "0.5rem" }}
                    />
                    <div
                      className="tech4-1-right"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <img
                        src={tech_4_2}
                        alt="Tech 4.2"
                        style={{ height: "250px" }}
                      />
                      <li style={{ fontWeight: "bold" }}>
                        제조사 및 통신사별
                        <br />
                        <span style={{ color: "gray" }}>
                          부가서비스 포팅 기술지원
                        </span>
                      </li>
                    </div>
                  </div>
                </li>
              </ul>

              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "2rem",
                }}
              >
                <img
                  src={tech_4_3}
                  alt="Tech 4.3"
                  style={{ marginRight: "1rem", maxWidth: "100%" }} // 이미지를 왼쪽으로 위치하도록 설정
                />
                <ul
                  style={{
                    color: "black", // 텍스트의 색상을 검정색으로 지정
                  }}
                >
                  <li>
                    <span style={{ color: "#F34998" }}>● </span>Legacy시스템과의
                    연동을 통한 모바일 APP 개발
                  </li>
                  <li>
                    <span style={{ color: "#F34998" }}>● </span>생활편의 APP
                    개발 및 배포 (말하는 웨더 알람, W-Life 등)
                  </li>
                  <li>
                    <span style={{ color: "#F34998" }}>● </span>교육용 APP 개발
                    및 배포 (모바일 스케치, 칠교놀이 등)
                  </li>
                  <li>
                    <span style={{ color: "#F34998" }}>● </span>크루셜텍 OTP용
                    모바일 APP 10종 개발
                  </li>
                  <li>
                    <span style={{ color: "#F34998" }}>● </span>SKT T증권 외 5개
                    증권사 APP 개발
                  </li>
                  <li>
                    <span style={{ color: "#F34998" }}>● </span>기업(동아오츠카,
                    선진, 신한, 대우, 현대)
                  </li>
                  <li>
                    <span style={{ color: "#F34998", marginLeft: "1rem" }}>
                      -{" "}
                    </span>
                    영업 관리 / 모바일 그룹웨어 APP 개발
                  </li>
                </ul>
              </li>
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
                <li
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  IOS 및 안드로이드 모바일 어플리케이션
                  <br />
                  HTML5 기반 모바일 웹
                </li>
                <img
                  src={tech_4_4}
                  alt="Tech 4.4"
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

export default TechnologyPage4;
