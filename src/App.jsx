import MovieCard from "./component/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useContext, useEffect } from "react";
import { MovieContext } from "./context/movieContext";

function App() {
  /* 틀렸던 곳 */
  const { movies, setMovies, token } = useContext(MovieContext);
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
  }, [movies, setMovies, token]);

  return (
    <>
      <div>
        <div
          className="
        flex
        flex-wrap justify-center
        p-6
        gap-6"
        >
          {/* 틀렸던 곳 */}
          {movies &&
            movies
              .filter((movie) => movie.adult === false)
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                  vote_average={movie.vote_average.toFixed(2)}
                  id={movie.id}
                />
              ))}
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
