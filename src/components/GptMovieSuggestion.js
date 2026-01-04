import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gptSearch);

  if (!movieNames?.length) {
    return <h4>No Movie Suggestions Found</h4>;
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Movie Suggestions:</h3>
      {movieNames.map((name, index) => {
        return (
          <MovieList
            key={index}
            title={name}
            movies={movieResults[index]}
          ></MovieList>
        );
      })}
    </div>
  );
};

export default GptMovieSuggestion;
