import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDataMovieQuerySearch } from "../services/search-data-movies";
import { useDispatch, useSelector } from "react-redux";
import { actionSearch } from "../redux/action/MovieSearch";
import { dataSearch } from "../redux/reducers/movie/authMovieSearchSlice";

const SearchMovieList = () => {
  const { title } = useParams();
  // const [TitleMovie, setTitleMovie] = useState("Eragon")
  const { data: fetchSearch, isLoading } = useDataMovieQuerySearch({
    page: 1,
    query: title,
  });
  const [Search, setSearch] = useState([]);
  const [Result, setResult] = useState(true);

  const dispatch = useDispatch();

  const movieSearch = useSelector((state) => state.search.datasearch);
  console.log(movieSearch, "data movie search");

  useEffect(() => {
    if (fetchSearch) {
      if (fetchSearch.data.length > 0) {
        setSearch(fetchSearch.data);
        dispatch(dataSearch(fetchSearch.data));
      } else {
        setResult(false);
      }
    }
  }, [fetchSearch, dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <h1 className="font-black font-montserrat text-[5rem]">
          Sedang Memuat Data
        </h1>
      </div>
    );
  }

  return (
    <div className="parents bg-gradient-to-r from-gray-500 to-gray-700">
      <div className="pop-text px-6 flex justify-between h-[3rem] py-2">
        <h1 className="font-black font-poppins font-bold tracking-wide text-[2rem]">
          Search Result "{title}"
        </h1>
        <Link to={"/movie-list"}>
          <div className="flex justify-center items-center h-[100%]">
            <p className="text-red-600 font-semibold font-montserrat mt-[1rem] hover:text-red-700">
              See All Movie
            </p>
            <i className="fas fa-arrow-right text-red-600 ml-[.5rem] mt-[1rem] hover:text-red-700"></i>
          </div>
        </Link>
      </div>
      {Result ? (
        <div className="flex flex-wrap justify-between item-center gap-5 px-[1.4rem] my-[1rem]">
          {Search.map((movie) => {
            return (
              <div className="bg-red-500 hover:scale-[105%] hover:bg-red-600 rounded-md mt-[.5rem]">
                <Link to={`/${movie.id}`}>
                  <img
                    className="poster-section min-h-[28rem] w-[17.5rem]"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="poster_path"
                  />
                </Link>
                <div className="movie-title flex justify-center items-center font-extrabold font-poppins h-[4rem] max-w-[17.5rem] text-white text-center text-[15px]">
                  <h1 className="mx-2">{movie.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex w-full h-screen justify-center items-center">
          <h1 className="font-black font-montserrat text-[5rem]">
            Movie Not Found
          </h1>
        </div>
      )}

      <div className="footer">
        <div className="bg-gradient-to-r from-gray-500 to-gray-700 w-full h-[3rem] flex justify-center items-center text-gray-600 font-semibold mt-[]">
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default SearchMovieList;
