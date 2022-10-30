import axiosClient from "./axiosClient";

const roomAPI = {
  getRooms: () => {
    return axiosClient.get("phong-thue");
  },

  getRoomDetails: (roomId) => {
    return axiosClient.get(`phong-thue/${roomId}`);
  },
  getCommentDetails: (roomId) => {
    return axiosClient.get(`binh-luan/lay-binh-luan-theo-phong/${roomId}`);
  },

  getRoomAddress: () => {
    return axiosClient.get("vi-tri");
  },
  getRoomAddressDetails: (roomId) => {
    return axiosClient.get(`vi-tri/${roomId}`);
  },
};
export default roomAPI;
