/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FileUpload from "../../components/FileUpload";
import axiosInstance from "../../utils/axios"; // axios 추가
import { useNavigate } from "react-router-dom"; // useNavigate로 수정

const UpdateNewsPage = () => {
  const { newsId } = useParams();
  const navigate = useNavigate(); // useNavigate 사용

  const [news, setNews] = useState({
    title: "",
    description: "",
    images: [],
    date: "",
    publishing_company: "",
    url: "",
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updatedImage, setUpdatedImage] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/news/${newsId}?type=single`);
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsId]);

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

  // 이 함수를 사용하여 상태 업데이트
  const handleImages = (e) => {
    const { images = [] } = e.target || {};
    setImages(images);
    setUpdatedImage((prevData) => ({
      ...prevData,
      images,
    }));
  };

  const handleUpdate = async () => {
    // NewsInfo 컴포넌트가 렌더링된 상태에서 전달된 onUpdateNews 함수 호출
    setImages([]);
    setUpdatedImage([]);
  };

  useEffect(() => {
    console.log(news.images);
    if (news?.images?.length > 0) {
      setLoading(true);
      try {
        let imagesArray = [];
        news.images.forEach((imageName) => {
          imagesArray.push(`${imageName}`);
        });

        setImages(imagesArray);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [news]);

  // 새로운 함수 추가: 이미지 업데이트를 위한 콜백
  const handleImageChange = (newImages) => {
    const imagesArray = Array.isArray(newImages) ? newImages : [newImages];

    setImages(imagesArray);
    setUpdatedImage((prevData) => ({
      ...prevData,
      images: imagesArray,
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
      event.preventDefault();
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedData = {
        title: news.title,
        description: news.description,
        images: updatedImage.images,
        date: news.date,
        publishing_company: news.publishing_company,
        url: news.url,
      };

      await axiosInstance.put(`/news/${newsId}`, updatedData);

      // 업데이트가 완료되면 필요한 작업 수행
      console.log("뉴스가 성공적으로 업데이트되었습니다.");
      navigate("/notice"); // navigate 사용

      // 예를 들어, 업데이트 후 어떤 페이지로 이동하거나 추가 작업 수행
    } catch (error) {
      console.error("뉴스 업데이트에 실패했습니다.", error);
    }
  };
  return (
    <div
      className="update-body"
      style={{ paddingLeft: "20%", paddingRight: "20%" }}
    >
      <section>
        <div className="text-center m-7">
          <h1>뉴스 수정</h1>
        </div>

        <form
          className="mt-6 flex flex-col"
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          <FileUpload images={images} onImageChange={handleImageChange} />

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

          <div className="mt-4 ml-auto">
            <button
              type="submit"
              className="w-[20vh] px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700"
              style={{ marginBottom: "10px" }}
            >
              수정하기
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateNewsPage;
