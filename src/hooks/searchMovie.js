import { useContext, useEffect } from "react";
import { MovieContext } from "../context/movieContext";

export function useDebounce(value, delay) {
  const { debounceValue, setDebounceValue } = useContext(MovieContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, setDebounceValue]);
  return debounceValue;
}
