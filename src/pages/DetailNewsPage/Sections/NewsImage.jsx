/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "../../../components/FileUpload";

const NewsImage = ({ news, onUpdateImage }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const [updatedImage, setUpdatedImage] = useState([]);

  const handleImages = (e) => {
    const { images = [] } = e.target || {};
    setImages(images);
    setUpdatedImage((prevData) => ({ ...prevData, images }));
  };

  const handleUpdate = async () => {
    await onUpdateImage(updatedImage);
    setImages([]);
    setUpdatedImage([]);
    window.location.reload();
  };

  const handleImageChange = (newImages) => {
    const imagesArray = Array.isArray(newImages) ? newImages : [newImages];
    setImages(imagesArray);
    setUpdatedImage((prevData) => ({ ...prevData, images: imagesArray }));
  };

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      if (news?.images?.length > 0) {
        try {
          const imagesArray = news.images.map(
            (imageName) => `${import.meta.env.VITE_SERVER_URL}/${imageName}`
          );
          setImages(imagesArray);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchImages();
  }, [news]);

  if (images.length === 1) {
    return (
      <div>
        <img
          src={images[0]}
          alt={`뉴스 이미지`}
          style={{ maxWidth: "300px", marginBottom: "10px", marginLeft: "20%" }}
        />
      </div>
    );
  }

  if (images.length > 1) {
    return (
      <div>
        <ImageGallery
          items={images.map((image) => ({ original: image, thumbnail: image }))}
        />
      </div>
    );
  }

  return null;
};

export default NewsImage;
