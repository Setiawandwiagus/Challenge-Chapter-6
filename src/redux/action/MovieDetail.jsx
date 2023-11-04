import { reduxMovieDetail } from "../../services/get-data-movies-detail";
import { dataDetail } from "../reducers/movie/authMovieDetailSlice";

export const actionDetail = () => async (dispatch) => {
  reduxMovieDetail()
    .then((result) => {
      dispatch(dataDetail(result.data.data));
      // console.log(result);
    })
    .catch((err) => {});
};
