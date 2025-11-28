import { useContext, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";

import { MovieContext } from "./context/movieContext";
import { useCheckAuth } from "./hooks/checkAuth";
import { useInfinityScroll } from "./hooks/infinityScroll";
import { useLoginUserDbCheck } from "./hooks/loginUserDbCheck";
import { toast } from "react-toastify";
import { AdminGuard } from "./components/AdminGuard";

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
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            language: "ko-kr",
            page,
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setMovies((prev) => [...prev, ...data.results]);
      setPageParams((prev) => [...prev, page]);
      setHasNextPage(data.page < data.total_pages);
    } catch (error) {
      toast.error(`영화 불러오기 실패! ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopRatedMovies(page);
  }, [page]);

  return (
    <div className="bg-black flex flex-wrap justify-center p-6 gap-6">
      <AdminGuard>
        <div className="text-[#fafaf8] text-2xl">관리자 페이지</div>
      </AdminGuard>
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
