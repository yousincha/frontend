/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios";
import "./UploadLibraryPage.css";
const apiUrl = "http://192.168.0.45:4000";

const UploadLibraryPage = ({ activeButton }) => {
  const [selectedFileType, setSelectedFileType] = useState(
    activeButton === 1 ? "brochure" : "solution"
  );
  const [file, setFile] = useState(null);
  const [solutionFiles, setSolutionFiles] = useState([]);
  const [brochureFiles, setBrochureFiles] = useState([]);

  useEffect(() => {
    fetchSolutionAndBrochureFiles();
  }, []);

  const handleFileTypeChange = (e) => {
    setSelectedFileType(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("libraryoption", selectedFileType);
      formData.append("file", file, encodeURIComponent(file.name));

      const response = await axiosInstance.post("/library", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("File upload response:", response);

      if (response.status === 200) {
        fetchSolutionAndBrochureFiles();
      } else {
        console.error("Error uploading file:", response.data);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  const handleDelete = async (libraryoption, filename) => {
    try {
      const response = await axiosInstance.delete(
        `/library/${libraryoption}/${encodeURIComponent(filename)}`
      );

      console.log("File delete response:", response);

      if (response.status === 200) {
        fetchSolutionAndBrochureFiles();
      } else {
        console.error("Error deleting file:", response.data);
      }
    } catch (error) {
      console.error("Error deleting file:", error);

      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  const fetchSolutionAndBrochureFiles = async () => {
    try {
      const [solutionResponse, brochureResponse] = await Promise.all([
        axiosInstance.get("/library/solution"),
        axiosInstance.get("/library/brochure"),
      ]);

      setSolutionFiles(solutionResponse.data);
      setBrochureFiles(brochureResponse.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const renderTable = (files, libraryoption) => (
    <div>
      <h1
        style={{ marginTop: "2rem" }}
      >{`${libraryoption.toUpperCase()} 테이블`}</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Download</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {files.map((fileName, index) => (
            <tr key={index}>
              <td>{fileName}</td>
              <td>
                <a
                  href={`${apiUrl}/library/${libraryoption}/${encodeURIComponent(
                    fileName
                  )}`}
                  download={fileName}
                >
                  Download
                </a>
              </td>
              <td>
                <button onClick={() => handleDelete(libraryoption, fileName)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div
      className="upload-body"
      style={{ paddingLeft: "20%", paddingRight: "20%" }}
    >
      <section>
        <div className="text-center m-7">
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            파일 업로드
          </h1>
          <form onSubmit={handleSubmit}>
            <label>
              메뉴 선택:
              <select
                value={selectedFileType}
                onChange={handleFileTypeChange}
                style={{
                  marginRight: "8px",
                  marginLeft: "8px",
                  padding: "8px", // 패딩 추가
                  backgroundColor: "#f2f2f2", // 배경색 변경
                  color: "#333", // 글자색 변경
                  borderRadius: "4px", // 둥근 모서리 추가
                  border: "1px solid #ccc", // 테두리 추가
                }}
              >
                <option value="brochure">브로셔</option>
                <option value="solution">솔루션 소개 자료</option>
              </select>
            </label>
            {selectedFileType === "brochure" ||
            selectedFileType === "solution" ? (
              <input
                type="file"
                onChange={handleFileChange}
                style={{
                  marginRight: "8px",
                  padding: "8px", // 패딩 추가
                  color: "#333", // 글자색 변경
                  borderRadius: "4px", // 둥근 모서리 추가
                  border: "1px solid #ccc", // 테두리 추가
                }}
              />
            ) : null}
            <button
              type="submit"
              className="w-[20vh] px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700"
              style={{
                marginBottom: "10px",
                marginTop: "10px",
                marginRight: "10px",
                textAlign: "center",
                padding: "10px 15px", // 버튼 안 여백
                border: "none", // 테두리 없음
                borderRadius: "4px", // 둥근 모서리
                cursor: "pointer", // 커서 모양
              }}
            >
              올리기
            </button>
          </form>
        </div>
      </section>
      {renderTable(solutionFiles, "solution")}
      {renderTable(brochureFiles, "brochure")}
    </div>
  );
};

export default UploadLibraryPage;
