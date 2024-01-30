import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import downfile from "../../../public/down_file.png";
import business_product from "../../../public/product.png";
import phonecall from "../../../public/phone-call.png";
import axiosInstance from "../../utils/axios";
import MainImage from "./Sections/MainImage";

const LandingPage = () => {
  const [image, setImage] = useState(null);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await axiosInstance.get("/news", {
          params: { limit: 4 },
        });

        if (Array.isArray(response.data.news)) {
          setLatestNews(response.data.news);
        } else {
          console.error("Invalid response format. Expected an array.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchImageData = async () => {
      try {
        const response = await axiosInstance.get("/image/getimages");
        setImage({ mainimages: response.data.mainimages });
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestNews();
    fetchImageData();
  }, []);

  const handleImageChange = async (newImages) => {
    try {
      const response = await axiosInstance.put(`/image/updateimage`, {
        mainImages: newImages,
      });

      console.log("Image update response", response.data);
    } catch (error) {
      console.error("Error updating image2:", error);
    }
  };

  const tableCellStyle = {
    verticalAlign: "top",
    borderRight: "1px solid #ddd",
    paddingLeft: "1.5%",
    width: "25%",
    textAlign: "left",
    height: "100%",
    marginTop: 0,
  };

  const lastCellStyle = {
    ...tableCellStyle,
    borderRight: "none",
  };

  const centerTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontSize: "30px",
    textAlign: "center",
  };

  const largeText = {
    fontSize: "36px",
    fontWeight: "600",
    fontFamily: "'Noto Serif KR', serif",
  };

  const smallText = {
    fontSize: "26px",
    fontWeight: "500",
    fontFamily: "'Noto Serif KR', serif",
  };

  return (
    <div className="w-full max-w-full mx-auto relative">
      <div className="w-[80vw] mx-auto relative">
        <MainImage image={image} onImageChange={handleImageChange} />
        <div style={centerTextStyle}>
          <div style={largeText}></div>
          <div style={smallText}></div>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          marginBottom: "2rem",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <table
          className="w-full text-center"
          style={{
            width: "100%",
            tableLayout: "fixed",
            verticalAlign: "top",
            marginTop: "2rem",
          }}
        >
          <tbody>
            <tr>
              <td style={tableCellStyle}>
                <div
                  className="table-title"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  NEWS & PRESS
                </div>
                <div className="table1-body" style={{ marginTop: "1rem" }}>
                  {Array.isArray(latestNews) &&
                    latestNews.map((news) => (
                      <div key={news._id}>
                        <Link to={`/notice/${news._id}`}>
                          <span style={{ color: "navy" }}>[보도자료]</span>{" "}
                          {news.title.length > 13
                            ? `${news.title.slice(0, 13)}...`
                            : news.title}
                        </Link>
                      </div>
                    ))}
                </div>
              </td>

              <td style={tableCellStyle}>
                <div
                  className="table-title"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  사업분야
                </div>
                <div
                  className="table2-body text-center"
                  style={{ marginTop: "1rem" }}
                >
                  <Link to="/product">
                    <img
                      src={business_product}
                      alt="비즈니스"
                      style={{ width: "200px", margin: "0 auto" }}
                    />
                  </Link>
                </div>
              </td>
              <td style={tableCellStyle}>
                <div
                  className="table-title"
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  고객센터
                  <img
                    src={phonecall}
                    alt="전화"
                    style={{ width: "24px", marginLeft: "5px" }}
                  />
                </div>
                <div className="table3-body" style={{ marginTop: "1rem" }}>
                  <ul>
                    <li>TEL: 031-731-4840</li>
                    <li>FAX: 031-731-4849</li>
                    <br />
                    <li style={{ fontSize: "24px", fontWeight: "bold" }}>
                      AM 10:00 ~ PM 07:00
                    </li>
                    <li>Mon ~ Fri (Break 12:00 ~ 1:00)</li>
                  </ul>
                </div>
              </td>

              <td style={lastCellStyle}>
                <div
                  className="table-title"
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  디지털 브로슈어
                </div>{" "}
                <div
                  className="table4-body"
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link to="/library">
                    <button
                      style={{
                        padding: "10px",
                        fontSize: "16px",
                        width: "130px",
                        cursor: "pointer",
                        borderRadius: "0",
                        border: "1px solid #ccc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      다운로드
                      <img
                        src={downfile}
                        alt="다운로드 아이콘"
                        style={{ marginLeft: "5px", width: "16px" }}
                      />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandingPage;
