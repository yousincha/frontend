/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const NewsInfo = ({ news }) => {
  const validNews = news ?? {};
  const keys = Object.keys(validNews);

  // 기본값은 news의 현재 데이터로 설정
  useState({
    title: validNews.title ?? "",
    date: validNews.date ?? "",
    publishing_company: validNews.publishing_company ?? "",
    description: validNews.description ?? "",
    url: validNews.url ?? "",
  });

  const formattedDate = new Date(validNews.date).toLocaleDateString();

  return (
    <div className="news_origin" style={{ marginBottom: "8rem" }}>
      <ul>
        <li className="flex justify-between">
          <span className="ml-auto">{formattedDate}</span>
        </li>
        <li className="flex justify-between">
          <span className="ml-auto">{validNews.publishing_company}</span>
        </li>

        <li className="mt-10">
          <span className="ml-auto" style={{ whiteSpace: "pre-line" }}>
            {validNews.description}
          </span>
        </li>
        <li className="mt-10">
          <div>
            * 관련 보도 자료는 아래의 링크를 통해 확인해 보실 수 있습니다.
          </div>
          <a href={validNews.url} target="_blank" rel="noopener noreferrer">
            {validNews.url}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NewsInfo;
