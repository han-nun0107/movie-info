import { useState } from "react";
import { MovieContext } from "./movieContext";

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const token = import.meta.env.VITE_MOVIE_TOKEN_KEY;

  return (
    <MovieContext.Provider value={{ movies, setMovies, token }}>
      {children}
    </MovieContext.Provider>
  );
}
