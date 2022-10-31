import axiosClient from "./axiosClient";
const AuthAPI = {
  login: (values) => {
    return axiosClient.post("auth/signin", values);
  },

  register: (values) => {
    return axiosClient.post("auth/signup", {
      ...values,
    });
  },
};
export default AuthAPI;
