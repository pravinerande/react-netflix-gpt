import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { TMDB_API_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/store/movieSlice";

const useUpcomingMovies = () => {
  // Hook implementation to fetch and return upcoming movies
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      `${TMDB_API_URL}/movie/upcoming?page=1&language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
