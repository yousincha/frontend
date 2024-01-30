import React from "react";
import pd_1 from "../../../../public/pd_3.1.png";
import pd_2 from "../../../../public/pd_3.2.png";

const SolutionPage4 = () => {
  const titleStyle = {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "white",
    backgroundColor: "#13315e",
  };

  const imgStyle = {
    height: "230px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
    marginBottom: "2rem",
    display: "block",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const liStyle = {
    marginLeft: "2rem",
    marginBottom: "1rem",
    fontWeight: "bold",
  };

  const data = [
    {
      title: ["Digital Broadcasting System"],
      img: pd_1,
      items: [
        "Open Broadcasting Channel",
        "Indoor, Outdoor, All real-time broadcasting",
        "Remote broadcasting using mobile phone",
        "Recoding, Iteration control",
        "Security, Administrator authority",
        "Emergency call (Fire, Silver care, etc.)",
        "Government integrated system on emergency disaster",
        "Easy remote control using smart phone",
      ],
    },
    {
      title: ["LTE-M Broadcast System"],
      img: pd_2,
      items: [
        "Indoor, All real-time broadcasting",
        "Remote broadcasting using mobile phone",
        "Iteration control",
        "Emergency call (Fire, Silver care, etc.)",
        "Easy remote control using smart phone",
        "OS: Android 4.0 ICS",
        "Chipset: Qualcomm MDM9307 (LTE-M)",
        "Screen resolution: 1280x800px",
        "Power: External Powered (100 – 240 AC / 5V DC, 2A)",
        "10inch TFT LCD",
      ],
    },
  ];

  return (
    <div>
      <div
        className="solution-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "4rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        PRODUCTS&SERVICES &gt;
        <span style={{ color: "navy" }}>마을 무선 방송 시스템</span>
      </div>
      <div
        className="solution-body"
        style={{
          display: "flex",
          marginTop: "2rem",
          marginLeft: "4rem",
        }}
      >
        <div className="solution-Right">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.map((cell, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "2rem",
                  marginRight: "2rem",
                  width: "500px",
                  height: "750px",
                  textAlign: "left",
                  border: "1px solid #ccc",
                }}
              >
                <div style={contentStyle}>
                  <h3 style={titleStyle}>{cell.title}</h3>
                  <img
                    src={cell.img}
                    alt={`3_2_${index + 1}`}
                    style={imgStyle}
                  />
                  {cell.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={liStyle}>
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage4;
