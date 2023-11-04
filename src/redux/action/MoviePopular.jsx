import { reduxMoviePopular } from "../../services/get-data-movies-popular";
import { setMovie } from "../reducers/movie/authMoviePopularSlice";

export const actionPopular = () => async (dispatch) => {
  reduxMoviePopular()
    .then((result) => {
      dispatch(setMovie(result.data.data));
      // console.log(result);
    })
    .catch((err) => {});
};
