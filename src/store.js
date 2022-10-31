import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./modules/Home/slices/bannerSlices";
import authSlice from "modules/Authentication/slices/authSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    banner: bannerSlice,
  },
});

export default store;
