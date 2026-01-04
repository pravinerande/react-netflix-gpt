import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  /**
   * 1. Movielist - popular
   * 2. MovieList - now playing
   * 3. MovieList - top rated
   * 4. MovieList - trending
   * 5. MovieList - upcoming
   */
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    <div>
      <MovieList title="Now Playing" movies={nowPlayingMovies}></MovieList>
      <MovieList title="Top Rated" movies={topRatedMovies}></MovieList>
      <MovieList title="Upcoming" movies={upcomingMovies}></MovieList>
      <MovieList title="Popular" movies={popularMovies}></MovieList>
      <MovieList title="Trending" movies={nowPlayingMovies}></MovieList>
    </div>
  );
};

export default SecondaryContainer;
