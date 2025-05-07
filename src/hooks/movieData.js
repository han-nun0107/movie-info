import { useEffect } from "react";

export function useFetchMovieData(setMovies, token) {
  useEffect(() => {
    const token = import.meta.env.VITE_MOVIE_TOKEN_KEY;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      })
      .catch((err) => console.error(err));
  }, [setMovies, token]);
}
