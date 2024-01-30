import React from "react";
import productimg from "../../../../public/4_3.jpg";

const ProductPage3 = () => {
  return (
    <div>
      <div
        className="product-subtitle"
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
        PRODUCTS &gt; <span style={{ color: "navy" }}>IoT 플랫폼</span>
      </div>
      <div
        className="product-body"
        style={{
          display: "flex",
          marginTop: "2rem",
          paddingRight: "10%",
          marginLeft: "auto",
        }}
      >
        <div className="product-Right">
          <table border="1">
            <tbody>
              <tr>
                <td>
                  <img src={productimg} alt="3_3" style={{ width: "100%" }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage3;
