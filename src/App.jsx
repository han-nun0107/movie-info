import movieListData from "./data/movieListData.json";
import MovieCard from "./component/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function App() {
  const movies = movieListData.results;

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
          {movies.map((movie) => (
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
