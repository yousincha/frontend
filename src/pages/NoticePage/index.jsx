import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Listtem from "./Sections/Listtem";
import axiosInstance from "../../utils/axios";
import { useSelector } from "react-redux";
import "./Newspage.css";

function Newspage() {
  const limit = 4;
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );
  const [totalPages, setTotalPages] = useState(0);
  const isAuth = useSelector((state) => state.user.isAuth);

  const pStyle = {
    width: "250px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "0",
    marginTop: "0.5rem",
    padding: "0.2rem",
    marginLeft: "0.2rem",
    textAlign: "center",
  };

  useEffect(() => {
    const fetchNews = async () => {
      const skip = (currentPage - 1) * limit;
      const params = {
        skip,
        limit,
      };
      try {
        const response = await axiosInstance.get("/news", { params });

        const totalFromResponse = response.data.newsTotal;
        if (totalFromResponse !== undefined) {
          setTotalPages(Math.ceil(totalFromResponse / limit));
          setCurrentPage(response.data.currentPage);
        } else {
          console.warn("Total pages not available in the response.");
          setTotalPages(0);
        }

        setNews(response.data.news);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem("currentPage", pageNumber); // Save current page to localStorage
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div
        className="news-body "
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <div className="page-left" style={{ marginTop: "2rem" }}>
          <div className="news-container">
            <div className="news-title">NOTICE</div>
            <div className="news-buttons">
              <p
                style={{
                  ...pStyle,
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="page-right"
          style={{
            width: "100%",
            height: "85vh",
          }}
        >
          <div
            className="news-subtitle"
            style={{
              fontWeight: "bold",
              fontSize: "36px",
              marginLeft: "2rem",
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            NOTICE &gt; <span style={{ color: "navy" }}>NEWS</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "10%",
            }}
          >
            {isAuth && (
              <Link
                to={`/upload`}
                className="w-[20vh] px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700"
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  marginRight: "10px",
                  textAlign: "center",
                }}
              >
                기사 업로드
              </Link>
            )}
          </div>

          <section style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            {/* list */}
            <div className="mt-4">
              {news.map((news) => (
                <Listtem news={news} key={news._id} />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="pagination-container">
                {currentPage > 1 && (
                  <button
                    onClick={() => handlePageClick(currentPage - 1)}
                    className="pagination-button"
                  >
                    {"<"}
                  </button>
                )}

                {[...Array(Math.min(5, totalPages)).keys()].map((offset) => {
                  const page =
                    offset + 1 + Math.floor((currentPage - 1) / 5) * 5;
                  // 실제 페이지가 존재하는지 확인
                  if (page <= totalPages) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`pagination-button ${
                          page === currentPage ? "active" : ""
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                  return null; // 페이지가 존재하지 않으면 null 반환
                })}

                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageClick(currentPage + 1)}
                    className="pagination-button"
                  >
                    {">"}
                  </button>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Newspage;
