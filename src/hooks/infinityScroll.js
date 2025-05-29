import { useContext, useEffect } from "react";
import { MovieContext } from "../context/movieContext";

export function useInfinityScroll() {
  const { setPage, observerRef } = useContext(MovieContext);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    const currentTarget = observerRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);
}
