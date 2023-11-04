import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setmovie: [],
};

const authMoviePopularSlice = createSlice({
  name: "movieAuthPopular",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.setmovie = action.payload;
    },
  },
});

export const { setMovie } = authMoviePopularSlice.actions;
export default authMoviePopularSlice.reducer;
