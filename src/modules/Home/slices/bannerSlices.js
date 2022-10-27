import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomAPI from "../../../apis/roomAPI";

const initialState = {
  banners: [],
  isLoading: false,
  error: "",
};

export const getBanners = createAsyncThunk(
  "home/banner/getBanners",
  async (_, { rejectWithValue }) => {
    try {
      const data = await roomAPI.getRooms();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const bannerSlice = createSlice({
  name: "home/banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBanners.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBanners.fulfilled, (state, { payload }) => {
      state.banners = payload;
      state.isLoading = false;
    });
    builder.addCase(getBanners.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export default bannerSlice.reducer;
