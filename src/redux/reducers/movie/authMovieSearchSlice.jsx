import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datasearch: [],
};

const authMovieSearchSlice = createSlice({
  name: "movieAuthSearch",
  initialState,
  reducers: {
    dataSearch: (state, action) => {
      state.datasearch = action.payload;
    },
  },
});

export const { dataSearch } = authMovieSearchSlice.actions;
export default authMovieSearchSlice.reducer;
