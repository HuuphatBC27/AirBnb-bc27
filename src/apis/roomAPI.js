import axiosClient from "./axiosClient";

const roomAPI = {
  getRooms: () => {
    return axiosClient.get("phong-thue");
  },
};
export default roomAPI;
