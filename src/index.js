import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import RouterList from "./routes/RouterList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const queryMovie = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryMovie}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_ID}>
          {/* ... */}
          <RouterList />
        </GoogleOAuthProvider>
        <ToastContainer />
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>
);
