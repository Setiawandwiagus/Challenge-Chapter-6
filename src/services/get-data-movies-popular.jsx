import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../utils/api-endpoints";
import https3 from "../utils/https3";

export const reduxMoviePopular = async () => {
  return await https3.get(API_ENDPOINTS.POPULAR);
};

const fetchDataMoviesPopular = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await https3.get(_key, { params: _params });
  return data;
};

const useDataMovieQueryPopular = (options) => {
  return useQuery([API_ENDPOINTS.POPULAR, options], fetchDataMoviesPopular);
};

export { fetchDataMoviesPopular, useDataMovieQueryPopular };
