import { useState } from "react";
import { MovieContext } from "./movieContext";
import { useNavigate } from "react-router-dom";

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState(null);
  const [detailMovies, setDetailMovies] = useState(null);
  const navigate = useNavigate();

  const token = import.meta.env.VITE_MOVIE_TOKEN_KEY;

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        token,
        navigate,
        detailMovies,
        setDetailMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
