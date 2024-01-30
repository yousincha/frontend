/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axiosInstance from "../../../utils/axios";
import ImageSlider from "../../../components/ImageSlider";
import FileUpload2 from "../../../components/FileUpload2";
import { useDispatch, useSelector } from "react-redux";

const MainImage = ({ onImageChange }) => {
  const [mainImages, setMainImages] = useState([]);
  const isAuth = useSelector((state) => state.user.isAuth);

  const fetchMainImages = async () => {
    try {
      const response = await axiosInstance.get("/image/getimages");

      if (response.data.mainimages) {
        const newMainImages = response.data.mainimages;
        setMainImages(newMainImages);
        console.log(newMainImages);
      } else {
        console.error("Main images not found in the response:", response.data);
      }
    } catch (error) {
      if (error.response && error.response.status !== 200) {
        console.error("Error fetching main images:", error);
      }
    }
  };

  useEffect(() => {
    fetchMainImages();
  }, []);

  const handleUpdateImage = async () => {
    try {
      const response = await axiosInstance.put(`/image/updateimage`, {
        mainImages: mainImages,
      });
      if (response && response.data && response.data.mainimages) {
        console.log("Image update response:", response.data);

        setMainImages(response.data.mainimages);

        if (onImageChange && typeof onImageChange === "function") {
          onImageChange(response.data.mainimages);
        }
        // 이미지 업데이트 후에 이미지 데이터를 다시 가져옴
        await fetchMainImages();
      } else {
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error updating image2:", error);
    }
  };

  const handleImageChange = (newImages) => {
    const imagesArray = Array.isArray(newImages) ? newImages : [newImages];
    setMainImages(imagesArray);

    if (onImageChange && typeof onImageChange === "function") {
      onImageChange(imagesArray);
    }
  };

  return (
    <div>
      {mainImages.length > 0 ? (
        <div>
          <div>
            <ImageSlider images={mainImages} />
          </div>
          {isAuth && (
            <div className="mainimg_update">
              <FileUpload2
                images={mainImages}
                onImageChange={handleImageChange}
              />
              <div className="flex justify-end mt-4 mb-4">
                <button
                  onClick={handleUpdateImage}
                  className="w-[25vh] px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700 end"
                  style={{ marginRight: "10px" }}
                >
                  이미지 업데이트
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>No main images available.</p>
      )}
    </div>
  );
};

export default MainImage;
