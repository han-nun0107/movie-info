import { useContext, useEffect } from "react";
import MovieCard from "./component/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { MovieContext } from "./context/movieContext";
import { useCheckAuth } from "./hooks/checkAuth";
import { useInfinityScroll } from "./hooks/infinityScroll";
import { useLoginUserDbCheck } from "./hooks/loginUserDbCheck";
import { toast } from "react-toastify";

function App() {
  const {
    movies,
    setLoading,
    page,
    token,
    setMovies,
    setHasNextPage,
    pageParams,
    setPageParams,
    observerRef,
  } = useContext(MovieContext);

  // 로그인 체크
  useCheckAuth();
  // 소셜 로그인 유저 자동 DB 저장
  useLoginUserDbCheck();
  // 무한 스크롤 페이지 로직
  useInfinityScroll();

  // 인기 영화 데이터 불러오기
  const fetchTopRatedMovies = async (page) => {
    if (pageParams.includes(page)) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setMovies((prev) => [...prev, ...data.results]);
      setPageParams((prev) => [...prev, page]);
      setHasNextPage(data.page < data.total_pages);
    } catch {
      toast.error("영화 불러오기 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopRatedMovies(page);
  }, [page]);

  return (
    <div className="bg-black flex flex-wrap justify-center p-6 gap-6">
      {movies
        ?.filter((movie) => movie.adult === false)
        .map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average.toFixed(2)}
            id={movie.id}
          />
        ))}
      <h1 className="text-[#fafaf8] text-2xl" ref={observerRef}>
        더보기
      </h1>
    </div>
  );
}

export default App;
