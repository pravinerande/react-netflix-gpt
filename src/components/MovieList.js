import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-4 px-12 relative bg-black">
      <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
      <div className="flex overflow-x-scroll custom-scrollbar-on-hover">
        <div className="flex gap-8">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
