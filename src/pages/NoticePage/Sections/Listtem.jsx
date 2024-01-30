// Listtem.js
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./Listtem.css"; // 새로운 CSS 파일 추가

const Listtem = ({ news }) => {
  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const mostRecentImage = news.images ? news.images[0] : null;

  return (
    <div className="listtem flex">
      <div className="flex-shrink-0">
        <div className="news-image">
          {mostRecentImage && (
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/${mostRecentImage}`}
              alt="News"
              style={{ maxWidth: "100%", width: "100px" }}
            />
          )}
        </div>
      </div>
      <div className="ml-4 flex flex-col">
        {/* flex 클래스 추가 */}
        <Link to={`/notice/${news._id}`} className="flex-1">
          {" "}
          {/* flex-1 클래스 추가 */}
          <div className="news-text">
            <p className="text-xs text-blue-700 font-semibold">[{news.date}]</p>
            <p className="text-xl font-semibold">{news.title}</p>
            <p className="text-gray-500">
              {truncateDescription(news.description, 50)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Listtem;
