import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { TMDB_API_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/store/movieSlice";

const usePopularMovies = () => {
  // Hook implementation to fetch and return popular movies
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      `${TMDB_API_URL}/movie/popular?page=1?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
