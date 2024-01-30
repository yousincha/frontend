import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

const UploadNewsPage = () => {
  const [news, setNews] = useState({
    title: "",
    description: "",
    images: [],
    date: "",
    publishing_company: "",
    url: "",
  });

  const [showWarning, setShowWarning] = useState(false); // State to manage the warning visibility
  const userData = useSelector((state) => state.user?.userData);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "date") {
      const formattedDate = new Date(value).toISOString().split("T")[0];
      setNews((prevState) => ({
        ...prevState,
        [name]: formattedDate,
      }));
    } else {
      setNews((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleImages = (newImages) => {
    setNews((prevState) => ({
      ...prevState,
      images: newImages,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any of the required fields are empty
    if (
      !news.title ||
      !news.date ||
      !news.publishing_company ||
      !news.description ||
      !news.url
    ) {
      // If any required field is empty, show the warning and prevent form submission
      setShowWarning(true);
      return;
    }

    const body = {
      writer: userData.id,
      ...news,
      createdAt: new Date(),
    };

    try {
      await axiosInstance.post("/news", body);
      navigate("/notice");
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
      event.preventDefault();
    }
  };

  return (
    <div
      className="upload-body"
      style={{ paddingLeft: "20%", paddingRight: "20%" }}
    >
      <section>
        <div className="text-center m-7">
          <h1>뉴스 업로드</h1>
        </div>

        <form
          className="mt-6 flex flex-col"
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          <FileUpload images={news.images} onImageChange={handleImages} />

          <div className="mt-4">
            <label htmlFor="title">제목</label>
            <input
              className="w-full px-4 py-3 bg-white border rounded-md"
              name="title"
              id="title"
              onChange={handleChange}
              value={news.title}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="date">작성일</label>
            <input
              type="date"
              className="w-full px-4 py-3 bg-white border rounded-md"
              name="date"
              id="date"
              onChange={handleChange}
              value={news.date}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="publishing_company">신문사</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white border rounded-md"
              name="publishing_company"
              id="publishing_company"
              onChange={handleChange}
              value={news.publishing_company}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="description">내용</label>
            <textarea
              className="w-full px-4 py-6 bg-white border rounded-md"
              name="description"
              id="description"
              onChange={handleChange}
              value={news.description}
              rows="4"
              style={{ whiteSpace: "pre-line" }}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="url">링크</label>
            <input
              className="w-full px-4 py-3 bg-white border rounded-md"
              name="url"
              id="url"
              onChange={handleChange}
              value={news.url}
              rows="4"
            />
          </div>

          {showWarning && (
            <div className="text-red-600 mt-4 mb-2">모두 입력해주세요.</div>
          )}

          <div className="mt-4 ml-auto">
            <button
              type="submit"
              className="w-[20vh] px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700"
              style={{ marginBottom: "10px" }}
            >
              생성하기
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UploadNewsPage;
