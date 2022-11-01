import axiosClient from "./axiosClient";
const userAPI = {
  getUser: (userName) => {
    if (!userName) {
      return axiosClient.get(`users`);
    } else {
      return axiosClient.get(`users/search/${userName}`);
    }
  },
  getUserById: (userId) => {
    return axiosClient.get(`users/${userId}`);
  },
  editUser: (value, userId) => {
    return axiosClient.put(`users/${userId}`, value);
  },
  deleteUser: (userId) => {
    return axiosClient.delete(`users`, {
      params: {
        id: userId,
      },
    });
  },
};
export default userAPI;
