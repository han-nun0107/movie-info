import { useContext, useEffect } from "react";
import { useDebounce } from "./searchMovie";
import { fetchSearchedMovies } from "../utils/SearchMovie";
import { MovieContext } from "../context/movieContext";

export function useLayoutInput() {
  const { input, setMovies, token } = useContext(MovieContext);
  const debounceInput = useDebounce(input, 500);

  useEffect(() => {
    const search = async () => {
      if (debounceInput.trim() === "") {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: "application/json",
            },
          }
        );
        const data = await res.json();
        setMovies(data.results);
        return;
      }

      const results = await fetchSearchedMovies(debounceInput, token);
      setMovies(results);
    };

    search();
  }, [debounceInput, setMovies, token]);
}
