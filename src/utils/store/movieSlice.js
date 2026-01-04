import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { nowPlayingMovies: [], movieTrailer: null },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
