// DetailNewsPage 컴포넌트
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import NewsImage from "./Sections/NewsImage";
import NewsInfo from "./Sections/NewsInfo";

import { useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate 사용
import { removeNewsItem } from "../../store/thunkFunctions";
import { useDispatch, useSelector } from "react-redux";

const DetailNewsPage = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axiosInstance.get(`/news/${newsId}?type=single`);
        setNews(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (newsId) {
      fetchNews();
    }
  }, [newsId]);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const [containerHeight, setContainerHeight] = useState("100%");
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axiosInstance.get(`/news/${newsId}?type=single`);
        setNews(response.data);

        // Set the container height dynamically based on conditions
        const windowHeight = window.innerHeight;
        const newHeight = windowHeight < 700 ? "1000px" : "100%";
        setContainerHeight(newHeight);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (newsId) {
      fetchNews();
    }
  }, [newsId, setContainerHeight]);
  // 뉴스 이미지 업데이트
  const handleUpdateImage = async (updatedData) => {
    try {
      // API 엔드포인트에 업데이트할 내용을 보냅니다.
      const response = await axiosInstance.put(`/news/${newsId}`, updatedData);
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!news) return "news정보가 없습니다.";

  // eslint-disable-next-line no-unused-vars
  const handleDeleteNews = async () => {
    try {
      // Dispatch the removeNewsItem action with the news title
      await dispatch(removeNewsItem(news.title));
      // Redirect to another page or handle the UI as needed
      navigate("/notice"); // useHistory 대신 useNavigate 사용
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ height: containerHeight }}>
      <section className="flex flex-col">
        <div className="flex" style={{ marginLeft: "58%" }}>
          {isAuth && (
            <Link
              to={`/notice/update/${news._id}`}
              className="w-[20vh] px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700"
              style={{
                marginBottom: "20px",
                marginTop: "20px",
                marginRight: "10px",
                textAlign: "center",
              }}
            >
              기사 업데이트
            </Link>
          )}
          <div>
            {/* Delete button */}
            {isAuth && (
              <button
                onClick={handleDeleteNews}
                className="w-[20vh] px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700"
                style={{
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                뉴스 삭제
              </button>
            )}
          </div>
        </div>

        <div className="text-center">
          <h1 className="p-4 text-2xl">{news.title}</h1>
        </div>

        <div className="flex gap-10">
          <div className="w-1/4">
            {/*NewsImage*/}
            <NewsImage news={news} onUpdateImage={handleUpdateImage} />
          </div>
          <div className="w-1/2">
            {/*NewsInfo*/}
            <NewsInfo news={news} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailNewsPage;
