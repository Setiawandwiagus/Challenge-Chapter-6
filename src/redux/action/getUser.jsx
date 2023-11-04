import { reduxGetUser } from "../../services/auth/get_me_user";
import { setUser } from "../reducers/auth/authLoginSlice";

export const getUser = () => async (dispatch) => {
  return reduxGetUser()
    .then((result) => {
      dispatch(setUser(result.data.data));
      // console.log(result);
    })
    .catch((err) => {
      console.log(err, "error");
    });
};
