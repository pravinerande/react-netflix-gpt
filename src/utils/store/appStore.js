import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import movieReducer from "../store/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore;
