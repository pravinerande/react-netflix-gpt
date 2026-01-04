import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { TMDB_API_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/store/movieSlice";

const useTopRatedMovies = () => {
  // Hook implementation to fetch and return top rated movies
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      `${TMDB_API_URL}/movie/top_rated?page=1&language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
