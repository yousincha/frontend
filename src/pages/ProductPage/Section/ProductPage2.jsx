import React, { useState, useEffect } from "react";

const ProductPage2 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imageImports = await Promise.all(
        Array.from({ length: 4 }, (_, i) =>
          import(`../../../../public/pd_2.${i + 1}.png`).then(
            (module) => module.default
          )
        )
      );
      setImages(imageImports);
    };

    importImages();
  }, []);

  const data = [
    [
      "Standard",
      "uLP-WIFI IEEE 802.11",
      "WIFI IEEE 802.11",
      "Bluetooth IEEE 802.15.1",
      "ZigBeeIEEE 802.15.4",
    ],
    [
      "Figure",
      ...images.map((src, index) => (
        <img
          key={`pd_${index + 1}`}
          src={src}
          alt={`Product pd_2.${index + 1}`}
          style={{
            width: index === 0 ? "115px" : "100%",
            height: "150px",
            margin: "auto",
            display: "block",
          }}
        />
      )),
    ],
    [
      "Organization",
      "WI-FI Alliance",
      "WI-FI Alliance",
      "Bluetooth SIG",
      "ZigBee Alliance",
    ],
    ["Topology", "Star", "Star", "Star", "Mesh, Star"],
    ["RF Frequenc", "2.4GHz 802.11 b/g/n", "2.4GHz", "2.4GHz", "2.4GHz"],
    ["Data Rate", "11-54Mbps", "11-105Mbps", "723Kbps", "250Kbps"],
    ["Range", "~ 70m", "~ 50m", "~ 10m", "~ 50m"],
    ["RF Power", "100mW", "100mW", "10mW", "10mW"],
    ["Battery Life", "Months", "Hours", "Weeks", "Years"],
    ["Sleep Current", "4uA", "NA", "15uA", "15uA"],
    ["Deep-Sleep Current", "0.3uA", "NA", "3uA", "3uA"],
    ["Current(Rx/Tx)", "72mA/395mA", "80mA/350mA", "25mA/35mA", "30mA/42mA"],
  ];

  const cellWidth = "210px";
  const targetItems = [
    "Standard",
    "uLP-WIFI IEEE 802.11",
    "WIFI IEEE 802.11",
    "Bluetooth IEEE 802.15.1",
    "ZigBeeIEEE 802.15.4",
  ];
  const targetItems2 = [
    "Figure",
    "Organization",
    "Topology",
    "RF Frequenc",
    "Data Rate",
    "Range",
    "RF Power",
    "Battery Life",
    "Sleep Current",
    "Deep-Sleep Current",
    "Current(Rx/Tx)",
  ];

  return (
    <div>
      <div
        className="product-subtitle"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        PRODUCT &gt; <span style={{ color: "navy" }}>무선 통신 모듈</span>
      </div>
      <div
        className="product-body"
        style={{
          display: "flex",
          marginTop: "2rem",
          marginLeft: "2rem",
          marginBottom: "4rem",
        }}
      >
        <div className="product-Right">
          <table
            border="1"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      style={{
                        width: cellWidth,
                        margin: 0,
                        padding: 10,
                        textAlign: "center",
                        border: "1px solid #ccc",
                        backgroundColor: targetItems.includes(cell)
                          ? "rgba(144, 144, 144, 0.6)"
                          : targetItems2.includes(cell)
                          ? "rgba(211, 211, 211, 0.1)"
                          : "transparent",
                        color: targetItems.includes(cell) ? "white" : "black",
                        fontWeight: targetItems.includes(cell)
                          ? "bold"
                          : "normal",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage2;
