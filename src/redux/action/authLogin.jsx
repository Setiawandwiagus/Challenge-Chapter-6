import { reduxLoginUser } from "../../services/auth/post_login_user";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setToken } from "../reducers/auth/authLoginSlice";
// import { setIsLoggedIn, setToken } from "../reducers/auth/authLoginSlice";

export const LoginUser = (input) => async (dispatch) => {
  try {
    const result = await reduxLoginUser(input);
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    dispatch(setToken(result.data.data.token));
    return true;
  } catch (err) {}
};

export const LogOut = (input) => (dispatch) => {
  dispatch(setToken(undefined));
  CookieStorage.remove(CookieKeys.AuthToken);
  window.location.href = "/";
};
