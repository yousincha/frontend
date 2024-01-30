/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import FileUpload2 from "../../components/FileUpload2";

const UploadImagePage = () => {
  const [image, setMainimg] = useState({
    mainimages: [], // Initialize as an empty array
  });

  const userData = useSelector((state) => state.user?.userData);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "date") {
      const formattedDate = new Date(value).toISOString().split("T")[0];
      setMainimg((prevState) => ({
        ...prevState,
        [name]: formattedDate,
      }));
    } else {
      setMainimg((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleImages = (newImages) => {
    setMainimg((prevState) => ({
      ...prevState,
      mainimages: newImages,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      writer: userData.id,
      ...image,
      createdAt: new Date(),
    };

    try {
      await axiosInstance.post("/", body);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (event) => {
    // Prevent form submission when Enter key is pressed, except for textareas
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
          <h1>메인 사진 업로드</h1>
        </div>

        <form
          className="mt-6 flex flex-col"
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          <FileUpload2 images={image.mainimages} onImageChange={handleImages} />

          <div className="mt-4 ml-auto">
            {/* 'ml-auto' class moves the button to the right */}
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

export default UploadImagePage;
