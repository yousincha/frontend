import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://192.168.0.45:4000/",
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("accessToken");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      // 에러 응답이 있을 때
      if (error.response.status === 401) {
        // 401 Unauthorized 에러가 발생하면 리프레시 토큰 등을 통한 재인증 로직을 수행
        // (해당 부분은 실제 프로젝트에 맞게 구현이 필요)
      } else if (error.response.data === "jwt expired") {
        window.location.reload();
      }
    } else if (error.request) {
      // 요청이 전송되었지만 응답이 없을 때
      console.error("No response received:", error.request);
    } else {
      // 요청 전송 자체에 문제가 생겼을 때
      console.error("Error sending the request:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
