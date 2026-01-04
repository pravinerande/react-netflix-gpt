import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { TMDB_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/movieSlice";

const useNowPlayingMovies = () => {
  // Hook implementation to fetch and return now playing movies
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `${TMDB_API_URL}/movie/now_playing?page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
