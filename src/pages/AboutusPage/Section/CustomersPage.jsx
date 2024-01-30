import React, { useEffect, useState } from "react";
import logo_c1 from "../../../../public/customer_logo/logo_c.1.jpg";
import logo_c2 from "../../../../public/customer_logo/logo_c.2.png";
import logo_c3 from "../../../../public/customer_logo/logo_c.3.png";
import logo_c4 from "../../../../public/customer_logo/logo_c.4.png";
import logo_c5 from "../../../../public/customer_logo/logo_c.5.jpg";
import logo_c6 from "../../../../public/customer_logo/logo_c.6.png";
import logo_c7 from "../../../../public/customer_logo/logo_c.7.png";
import logo_c8 from "../../../../public/customer_logo/logo_c.8.png";
import logo_c9 from "../../../../public/customer_logo/logo_c.9.png";
import logo_c10 from "../../../../public/customer_logo/logo_c.10.jpg";
import logo_c11 from "../../../../public/customer_logo/logo_c.11.png";
import logo_c12 from "../../../../public/customer_logo/logo_c.12.jpg";
import logo_c13 from "../../../../public/customer_logo/logo_c.13.png";
import logo_c14 from "../../../../public/customer_logo/logo_c.14.jpg";
import logo_c15 from "../../../../public/customer_logo/logo_c.15.jpg";
import logo_c16 from "../../../../public/customer_logo/logo_c.16.png";

import logo_p1 from "../../../../public/customer_logo/logo_p.1.png";
import logo_p2 from "../../../../public/customer_logo/logo_p.2.png";
import logo_p3 from "../../../../public/customer_logo/logo_p.3.jpg";
import logo_p4 from "../../../../public/customer_logo/logo_p.4.jpg";
import logo_p5 from "../../../../public/customer_logo/logo_p.5.jpg";
import logo_p6 from "../../../../public/customer_logo/logo_p.6.jpg";
import logo_p7 from "../../../../public/customer_logo/logo_p.7.png";
import logo_p8 from "../../../../public/customer_logo/logo_p.8.jpg";
import logo_p9 from "../../../../public/customer_logo/logo_p.9.png";

const CustomersPage = () => {
  const [contentHeight, setContentHeight] = useState("700px");
  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      if (windowHeight > 600) {
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
  const listItemStyle = {
    width: "200px",
    height: "80px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    marginRight: "2rem",
  };
  return (
    <div>
      <div
        className="customers-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        ABOUT US &gt; <span style={{ color: "navy" }}>주요고객 및 파트너</span>
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
            빌리브마이크론은 다양한 산업 분야에서 선두 기업들과 긴밀한 협력을
            맺고 있습니다.
            <br />
            우리는 혁신적인 기술과 전문성을 기반으로 주요 고객사 및 파트너와의
            긴장감 있는 동반 성장을 이루어내고 있습니다.
          </li>
          <li style={{ marginTop: "2rem" }}>
            우리의 협업은 단순한 비즈니스 파트너십을 넘어서 전략적인 동맹으로
            굳건히 이어져 있으며, 이를 통해 우리는 지속적으로
            <br />
            발전하고 성장하고 있습니다. 각 파트너와의 긴기에 걸친 협업을 통해
            우리는 시장의 변화에 민첩하게 대응하고 혁신적인 솔루션을
            <br />
            제공함으로써 새로운 비즈니스 기회를 창출하고 있습니다.
          </li>
          <li style={{ marginTop: "2rem" }}>
            우리의 팀은 최고 수준의 기술력과 전문 지식을 바탕으로 함께 일하고
            있는 파트너와 고객사들에게 가치 있는 협력을 제공하고 있습니다.
            <br />
            이러한 역동적이고 상호간의 협력을 바탕으로 우리는 지속적으로 산업의
            선두에 서 있으며, 더 나아가 미래의 기술과 비즈니스 환경에서도
            <br />
            성공적인 결과를 이끌어내고 있습니다.
          </li>
          <li
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              color: "#13315e",
              marginTop: "2rem",
            }}
          >
            주요고객
          </li>
          <ul
            style={{
              marginTop: "1rem",
              display: "flex",
              listStyle: "none",
              padding: 0,
              flexWrap: "wrap", // 요소가 넘칠 경우 다음 줄로 넘어가도록 설정
            }}
          >
            <li style={listItemStyle}>
              <img
                src={logo_c1}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c2}
                alt="VillivMicron Ventures"
                style={{ width: "50px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c3}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c4}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c5}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c6}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c7}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c8}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c9}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c10}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c11}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c12}
                alt="VillivMicron Ventures"
                style={{ width: "70px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c13}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c14}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c15}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_c16}
                alt="VillivMicron Ventures"
                style={{ width: "60px" }}
              />
            </li>
          </ul>
          <li
            style={{ fontSize: "26px", fontWeight: "bold", color: "#13315e" }}
          >
            협력기관
          </li>
          <ul
            style={{
              marginTop: "1rem",
              display: "flex",
              listStyle: "none",
              padding: 0,
              flexWrap: "wrap",
            }}
          >
            <li style={listItemStyle}>
              <img
                src={logo_p1}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_p2}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
            <li style={listItemStyle}>
              <img
                src={logo_p3}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>{" "}
            <li style={listItemStyle}>
              <img
                src={logo_p4}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>{" "}
            <li style={listItemStyle}>
              <img
                src={logo_p5}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>{" "}
            <li style={listItemStyle}>
              <img
                src={logo_p6}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>{" "}
            <li style={listItemStyle}>
              <img
                src={logo_p7}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>{" "}
            <li style={listItemStyle}>
              <img
                src={logo_p8}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>{" "}
            <li style={listItemStyle}>
              <img
                src={logo_p9}
                alt="VillivMicron Ventures"
                style={{ width: "100px" }}
              />
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default CustomersPage;
