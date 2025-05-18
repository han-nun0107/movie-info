import MovieCard from "./component/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useContext, useEffect } from "react";
import { MovieContext } from "./context/movieContext";
import { useAsyncMovieData } from "./hooks/movieData";
import { useSupabaseAuth } from "./auth";

function App() {
  /* 틀렸던 곳 */
  const { movies, setMovies, token, setUserInfo, setIsLogin } =
    useContext(MovieContext);
  const { getUserInfo } = useSupabaseAuth();
  useEffect(() => {
    const userInfo = async () => {
      const user = await getUserInfo();
      if (user?.user) {
        setUserInfo(user.user);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };
    userInfo();
  }, []);

  useAsyncMovieData(setMovies, token);
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
