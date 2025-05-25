import MovieCard from "./component/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useContext, useEffect } from "react";
import { MovieContext } from "./context/movieContext";
import { useCheckAuth } from "./hooks/checkAuth";
import { useInfinityScroll } from "./hooks/infinityScroll";

function App() {
  /* 틀렸던 곳 */
  const {
    movies,
    setLoading,
    setPage,
    page,
    token,
    setMovies,
    setHasNextPage,
    pageParams,
    setPageParams,
    observerRef,
  } = useContext(MovieContext);

  useCheckAuth();
  const fetchTopRatedMovies = async (page) => {
    if (pageParams.includes(page)) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=${page}`,
        {
          method: "GET", // 생략 가능하지만 명시해도 좋음
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setPageParams((prev) => [...prev, page]);
      setHasNextPage(data.page < data.total_pages);
      console.log("data:", data);
    } catch (error) {
      console.log("영화 불러오기 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  useInfinityScroll(setPage, observerRef);

  useEffect(() => {
    fetchTopRatedMovies(page);
  }, [page]);

  return (
    <>
      <div>
        <div
          className="
          bg-black
        flex
        flex-wrap justify-center
        p-6
        gap-6"
        >
          {/* 틀렸던 곳 */}
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
      </div>

      {/* <Swiper
        spaceBetween={10}
        slidesPerView={5}
        className=" bg-blue-300 h-[40rem]"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="h-[37.5rem]">
              <MovieCard
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average.toFixed(2)}
                id={movie.id}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
}

export default App;
