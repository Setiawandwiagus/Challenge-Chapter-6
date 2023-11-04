import { reduxMovieSearch } from "../../services/search-data-movies";
import { dataSearch } from "../reducers/movie/authMovieSearchSlice";

export const actionSearch = () => async (dispatch) => {
  reduxMovieSearch()
    .then((result) => {
      dispatch(dataSearch(result.data.data));
      // console.log(result);s
    })
    .catch((err) => {});
};
