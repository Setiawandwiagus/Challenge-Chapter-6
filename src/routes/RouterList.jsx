import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMoviesList from "../pages/AllMoviesList";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DetailMovies from "../pages/DetailMovies";
import HomePage from "../pages/HomePage";
import SearchMovieList from "../pages/SearchMovieList";
import TokenProtected from "../assets/components/protected/TokenProtected";

const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<TokenProtected> <HomePage /> </TokenProtected>}/>
        <Route path="/search/:title" element={<SearchMovieList />} />
        <Route path="/:id" element={<DetailMovies />} />
        <Route path="/movie-list" element={<AllMoviesList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterList;
