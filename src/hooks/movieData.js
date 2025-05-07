import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function useFetchMovieData(setMovies, token) {
  useEffect(() => {
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

export function useDetailMovieData(setDetailMovies, token) {
  const { movieId } = useParams();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=ko-kr`,
      options
    )
      .then((res) => res.json())
      .then((res) => setDetailMovies(res))
      .catch((err) => console.error(err));
  }, [movieId, setDetailMovies, token]);
}
/* async await */
