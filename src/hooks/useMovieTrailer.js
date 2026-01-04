import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/store/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    // Logic to fetch or retrieve movie videos goes here
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const trailers = json.results?.filter((video) => video.type === "Trailer");
    if (trailers?.length) {
      dispatch(addTrailerVideo(trailers[0]));
    } else {
      dispatch(addTrailerVideo(json.results[0] || null));
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
