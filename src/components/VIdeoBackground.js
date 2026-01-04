import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen h-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
          //"https://www.youtube.com/watch?v=c-jII0YMkm8&pp=ugUEEgJlbg%3D%3D"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
