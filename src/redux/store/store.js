import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getMiddleware) => getMiddleware().concat(thunk),
});
