import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datadetail: [],
};

const authMovieDetailSlice = createSlice({
  name: "movieAuthDetail",
  initialState,
  reducers: {
    dataDetail: (state, action) => {
      state.datadetail = action.payload;
    },
  },
});

export const { dataDetail } = authMovieDetailSlice.actions;
export default authMovieDetailSlice.reducer;
