import React, { useState, useEffect } from "react";
import downfile from "../../../../public/down_file.png";
import { useSelector } from "react-redux";
import "../LibraryPage.css";
import axiosInstance from "../../../utils/axios";
import { Link } from "react-router-dom";
const apiUrl = "http://192.168.0.45:4000";

const SolutionPage = () => {
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );
  const [solutionFiles, setsolutionFiles] = useState([]);

  useEffect(() => {
    // 페이지가 변경될 때마다 localStorage 업데이트
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);
  const handleLibraryButtonClick = (buttonName) => {
    setCurrentPage(1); // 버튼이 클릭될 때 pagination-button을 1페이지로 설정
  };
  const fetchSolutionFiles = async () => {
    try {
      const response = await axiosInstance.get("/library/solution");
      setsolutionFiles(response.data);
    } catch (error) {
      console.error("Error fetching solution files:", error);
    }
  };
  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 브로셔 파일 목록을 가져오기
    fetchSolutionFiles();

    // Update currentPage with the value from localStorage if it exists
    const localStoragePage = parseInt(localStorage.getItem("currentPage"));
    if (!isNaN(localStoragePage)) {
      setCurrentPage(localStoragePage);
    } else {
      setCurrentPage(1);
    }
  }, []);


  // 다운로드 핸들러 수정
  const handleDownload = (fileName) => {
    // Create a link element
    const link = document.createElement("a");

    // Set the href attribute to the download endpoint
    link.href = `${apiUrl}/library/solution/${encodeURIComponent(fileName)}`;

    // Set the download attribute with the desired file name
    link.download = fileName;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  const getButtonStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "0",
    cursor: "not-allowed", // 커서를 변경하여 사용 불가능한 것처럼 표시
    pointerEvents: "none", // 마우스 이벤트를 비활성화
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  const getButtonCellStyle = (pageIndex) => ({
    borderBottom: "1px solid #ddd",
    borderTop: pageIndex === 0 ? "1px solid #ddd" : "none", // 첫 페이지에만 borderTop 추가
    borderLeft: "none",
    borderRight: "none",
    height: "70px",
    verticalAlign: "middle",
  });

  const buttonActionStyle = {
    marginTop: "1rem",
    paddingLeft: "10%",
    paddingRight: "10%",
  };
  const isAuth = useSelector((state) => state.user.isAuth);

  const renderButtonContent = () => {
    const contentArray = solutionFiles.map((filename) => [
      "solution",
      filename,
    ]);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(contentArray.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageContent = contentArray.slice(startIndex, endIndex);

    return (
      <div>
        {pageContent.map(([type, buttonText], index) =>
          renderButton(type, buttonText, index)
        )}
        <div className="pagination-container">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="pagination-button"
            >
              {"<"}
            </button>
          )}
          {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
            const pageNumber =
              index + 1 + Math.floor((currentPage - 1) / 5) * 5;
            // 실제 페이지가 존재하는지 확인
            if (pageNumber <= totalPages) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  disabled={currentPage === pageNumber}
                  className={`pagination-button ${
                    pageNumber === currentPage ? "active" : ""
                  }`}
                >
                  {pageNumber}
                </button>
              );
            }
            return null; // 페이지가 존재하지 않으면 null 반환
          })}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="pagination-button"
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderButton = (type, buttonText, index) => (
    <div key={type + index}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          borderSpacing: "0",
        }}
      >
        <tbody>
          <tr>
            <td style={getButtonCellStyle(index)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <button
                  style={{
                    ...getButtonStyle,
                  }}
                  onClick={() => handleLibraryButtonClick(type)}
                >
                  {buttonText}
                </button>
                <button
                  onClick={() => handleDownload(buttonText)}
                  style={{
                    width: "20%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>다운로드 </span>
                  <img
                    onClick={() => handleDownload(buttonText)}
                    style={{ width: "20px", height: "20px" }}
                    src={downfile}
                    alt="다운로드 이미지"
                  />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <div className="library-body " style={{ display: "flex", gap: 10 }}>
        <div className="page-right" style={{ width: "100%", height: "85vh" }}>
          <div
            className="library-subtitle"
            style={{
              fontWeight: "bold",
              fontSize: "36px",
              marginLeft: "2rem",
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            LIBRARY &gt; <span style={{ color: "navy" }}>솔루션 소개 자료</span>
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
                to={`/library/upload`}
                className="w-[20vh] px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700"
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  marginRight: "10px",
                  textAlign: "center",
                }}
              >
                파일 업로드
              </Link>
            )}
          </div>
          <div className="button-action" style={buttonActionStyle}>
            {renderButtonContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;
