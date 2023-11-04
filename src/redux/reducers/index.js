import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authLoginSlice";
import authMoviePopularSlice from "./movie/authMoviePopularSlice";
import authMovieSearchSlice from "./movie/authMovieSearchSlice";
import authMovieDetailSlice from "./movie/authMovieDetailSlice";

export default combineReducers({
  auth: authLoginSlice,
  movie: authMoviePopularSlice,
  search: authMovieSearchSlice,
  detail: authMovieDetailSlice,
});
