import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./modules/Home/slices/bannerSlices";
const store = configureStore({
  reducer: {
    banner: bannerSlice,
  },
});

export default store;
