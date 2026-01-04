import { useRef } from "react";
import { openai } from "../utils/openai";
import { API_OPTIONS, TMDB_API_URL } from "../utils/constants";
import { addGptMovies } from "../utils/store/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `${TMDB_API_URL}/search/movie?query=` +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const gptSearchHandler = async () => {
    console.log("GPT Search initiated-", searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // make openAI API call with search.current.value as input prompt
    const gptResponse = await openai.responses.create({
      model: "gpt-5-nano",
      input: gptQuery,
      store: true,
    });

    // gptResponse
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));

    if (!gptResponse?.output_text) {
      // handle no response case
      console.error("No response from GPT");
    }

    console.log("GPT Response-", gptResponse.output_text);

    const movieNames = gptResponse.output_text.split(",");

    const promiseArray = movieNames.map((name) => searchMovieTMDB(name));

    const tmdbResults = await Promise.all(promiseArray);

    console.log("TMDB Results from GPT Movie Names-", tmdbResults);

    dispatch(
      addGptMovies({ movieNames: movieNames, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder="Search for movies, TV shows, genres, etc."
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={gptSearchHandler}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
