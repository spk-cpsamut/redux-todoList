import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.interceptors.request.use(
  (config) => {
    if (
      config.url.includes("/user/login") ||
      config.url.includes("/user/register")
    ) {
      return config;
    }

    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    throw error;
  }
);

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("store");
      window.location.reload(); //refresh
    }
    return Promise.reject(error); // ถ้าไม่รีเทิร์นอันนี้ มันจะไม่รู้ว่า เออเร่อ จะทำงานแปลกๆ
  }
);

export default axios;
