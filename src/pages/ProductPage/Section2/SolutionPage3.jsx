import React from "react";
import serviceimg from "../../../../public/3_3.jpg";

const SolutionPage3 = () => {
  return (
    <div>
      <div
        className="solution-subtitle"
        style={{
          fontWeight: "bold",
          width: "350px",
          marginLeft: "auto",
          marginRight: "5%",
          marginTop: "1%",
          marginBottom: 0,
          textAlign: "right",
        }}
      >
        SERVICES &gt; <span style={{ color: "navy" }}>모바일 APP</span>
      </div>
      <div
        className="solution-body"
        style={{
          display: "flex",
          marginTop: "2rem",
          paddingRight: "10%",
          marginLeft: "auto",
        }}
      >
        <div
          className="solution-Right"
          style={{
            marginLeft: "7%",
          }}
        >
          <table border="1">
            <tbody>
              <tr>
                <td>
                  <img src={serviceimg} alt="3_3" style={{ width: "100%" }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage3;
