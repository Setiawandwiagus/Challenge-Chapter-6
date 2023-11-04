import React, { useEffect, useState } from "react";
import PlayOutlineIcon from "@rsuite/icons/PlayOutline";
import SearchIcon from "@rsuite/icons/Search";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import PopularMovies from "../assets/components/PopularComponents/PopularMovies";
// import { useDataMovieQueryPopular } from "../services/get-data-movies-popular";
import { Link } from "react-router-dom";
// import { CookieKeys, CookieStorage } from "../utils/cookies";
// import { useGetDataUser } from "../services/auth/get_me_user";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../redux/action/authLogin";
import { actionPopular } from "../redux/action/MoviePopular";
import { getUser } from "../redux/action/getUser";

const HomePage = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Search, setSearch] = useState("");
  // const [Popular, setPopular] = useState([]);
  // const [User, setUser] = useState([]);

  // const { data: fetchUser } = useGetDataUser({});
  // const { data: fetchPopular } = useDataMovieQueryPopular({});

  const movies = useSelector((state) => state.movie.setmovie);
  const GetUser = useSelector((state) => state.auth.user);
  // console.log(movies, "data movie popular");

  const getPopularMovies = () => {
    dispatch(actionPopular());
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  const renderPopularMovieList = () => {
    return movies.slice(0, 5).map((movie, i) => {
      return <PopularMovies key={i} dataPopular={movie} />;
    });
  };

  const dataUser = () => {
    dispatch(getUser());
  };

  useEffect(() => {
    dataUser();
  }, []);

  // useEffect(() => {
  //   if (fetchPopular && fetchUser) {
  //     setPopular(fetchPopular.data);
  //     setUser(fetchUser);
  //   }
  // }, [fetchPopular, fetchUser, User]);

  SwiperCore.use([Pagination, Autoplay]);

  return (
    <>
      <div className="parents">
        <div className="header-section absolute flex justify-between z-50 w-full mt-[.5rem]">
          <div className="brand-text flex justify-center items-center mx-[1rem]">
            <div className="text-red-600 text-[2.5rem] font-bold">
              <a href="/home">Movielist</a>
            </div>
          </div>
          <div className="search-section w-[40%] flex justify-center items-center">
            <div className="relative w-full">
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="border-2 w-full bg-transparent font-bold font-montserrat text-white border-red-600 rounded-full px-4 py-2 outline-red-600 focus:border-red-600 focus:outline-none"
                placeholder="What do you want to watch?"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex justify-center items-center">
                <Link to={`/search/${Search}`}>
                  <SearchIcon className="text-[1.5rem] hover:scale-[110%] text-slate-300 mx-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="head-btn flex gap-4 justify-center items-center mx-6">
            <button className="bg-red-500 text-white font-semibold text-[1rem] border-2 border-red-600 outline-red-600 rounded-full w-[8rem] h-[2.5rem] hover:bg-red-600 border-none">
              Hi {GetUser.name}
            </button>
            <button
              onClick={() => {
                dispatch(LogOut());
              }}
              className="bg-red-500 text-white font-semibold text-[1rem] border-2 border-red-600 outline-red-600 rounded-full w-[6rem] h-[2.5rem] hover:bg-red-600 border-none"
            >
              Logout
            </button>
          </div>
        </div>
        {/* Description */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
        >
          {movies.slice(0, 5).map((movie, i) => {
            const backgroundStyle = {
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
            };
            return (
              <SwiperSlide key={i}>
                <div
                  className={`body-parents bg-cover relative bg-center bg-no-repeat h-screen overflow-hidden py-1 z-50 flex justify-start items-center`}
                  style={backgroundStyle}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black -z-50"></div>
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
                  <div
                    key={i}
                    className={`desc-section flex flex-col gap-4 w-[60%] text-white mx-4`}
                  >
                    <div className="Movie-title">
                      <h1 className="font-extrabold font-montserrat text-[3.5rem] leading-[4.5rem]">
                        {movie.title}
                      </h1>
                    </div>
                    <div className="Movie-overview">
                      <p className="text-[1rem] text-justify font-normal font-montserrat">
                        {movie.overview}
                      </p>
                    </div>
                    <div className="desc-btn">
                      <div className="bg-red-500 rounded-full px-3 font-montserrat font-bold pt-[.7rem] h-[2.5rem] text-[0.8rem] w-[10.5rem] hover:bg-red-600">
                        <PlayOutlineIcon className="text-[1rem] mx-[0.3rem] mb-[0.2rem]" />
                        WATCH TRAILER
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="pop-movie-list py-[1.5rem]">
          <div className="pop-text px-6 flex justify-between h-[3rem]">
            <h1 className="font-black font-poppins tracking-wide text-[2rem]">
              Popular Movie
            </h1>
            <Link to={"/movie-list"}>
              <div className="flex justify-center items-center h-[100%]">
                <p className="text-red-600 font-semibold font-montserrat hover:text-red-700">
                  See All Movie
                </p>
                <i className="fas fa-arrow-right text-red-600 ml-[.5rem] hover:text-red-700"></i>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap justify-between items-center px-[1.7rem] gap-3 py-[1rem]">
            {renderPopularMovieList()}
          </div>
        </div>

        <div className="footer">
          <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-400 to-red-600 w-full h-[3rem] flex justify-center items-center text-white font-semibold">
            <AiOutlineCopyrightCircle className="mr-[.5rem] mt-[.2rem]" />
            <span>Credit by Kevin Ginting, Rafani Salsabilah, Dwi Agus S.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
