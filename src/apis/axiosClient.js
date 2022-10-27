import axios from "axios";

//setup cấu hình mặc đinh cho axios
const axiosClient = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api/",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNyIsIkhldEhhblN0cmluZyI6IjI4LzAzLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3OTk2MTYwMDAwMCIsIm5iZiI6MTY0NjE1NDAwMCwiZXhwIjoxNjgwMTA5MjAwfQ.2e6OrL1-SuHZKNfdr9iq67HB3GQ_h3v8-evzYyuSIFA",
  },
});

// interceptors
axiosClient.interceptors.response.use(
  // thành công
  (response) => {
    //ta có thể thay đổi response trước khi response được trả ra cho nơi gọi request
    //response.data : format   của cybersoft
    //.content :format của cybersoft
    return response.data.content;
  },
  //thất bại
  (error) => {
    // ta có thể thay đổi error trước khi error được trả ra cho nơi gọi request
    Promise.reject(error.response?.data.content);
  }
);
export default axiosClient;
