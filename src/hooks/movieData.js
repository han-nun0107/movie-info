import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function useAsyncMovieData(setMovies, token) {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const fetchMovie = async () => {
      try {
        const respone = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=1",
          options
        );
        const data = await respone.json();

        if (data.error) {
          setMovies(null);
        } else {
          setMovies(data.results);
        }
      } catch (error) {
        console.log("영화 데이터 불러오기 실패", error);
      }
    };
    fetchMovie();
  }, [setMovies, token]);
}

export function useAsyncDetailMovieData(setDetailMovies, token) {
  const { movieId } = useParams();

  useEffect(() => {
    setDetailMovies(null);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchDetailMovie = async () => {
      try {
        const respone = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko-kr`,
          options
        );
        const data = await respone.json();

        if (data.success === false) {
          setDetailMovies(null);
        } else {
          setDetailMovies(data);
        }
      } catch (error) {
        console.log("영화 디테일 페이지 불러오기 실패", error);
      }
    };
    fetchDetailMovie();
  }, [movieId, setDetailMovies, token]);
}
