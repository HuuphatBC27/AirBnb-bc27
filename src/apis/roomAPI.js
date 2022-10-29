import axiosClient from "./axiosClient";

const roomAPI = {
  getRooms: () => {
    return axiosClient.get("phong-thue");
  },

  getRoomDetails: (roomId) => {
    return axiosClient.get(`phong-thue/${roomId}`);
  },
  getComment: (roomId) => {
    return axiosClient.get(`binh-luan/lay-binh-luan-theo-phong/${roomId}`);
  },
};
export default roomAPI;
