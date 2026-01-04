import { useSelector } from "react-redux";
import VideoBackground from "./VIdeoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) {
    return;
  }
  const mainMovie = movies[0];

  if (!mainMovie) {
    return;
  }

  return (
    <div className="w-screen h-screen relative">
      <VideoTitle
        title={mainMovie?.title}
        overview={mainMovie?.overview}
      ></VideoTitle>
      <VideoBackground movieId={mainMovie?.id}></VideoBackground>
    </div>
  );
};

export default MainContainer;
