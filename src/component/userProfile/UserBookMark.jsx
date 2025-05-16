import { useContext } from "react";
import { handleReset } from "../../utils/handle/handleReset";
import { MovieContext } from "../../context/movieContext";
import  MovieCard  from "../../component/MovieCard";

export default function UserBookMark() {
  const { userInfo, likeMovies, setLikeMovies } = useContext(MovieContext);
  return (
    <div className="w-[95%] border-t border-t-gray-500">
      <div className="flex justify-between px-10 py-3">
        <h2 className="text-2xl font-bold mb-4">북마크</h2>
        <button
          onClick={() => handleReset(userInfo, setLikeMovies)}
          className="cursor-pointer bg-[#f8d7da] text-[#842029] rounded-[50%]"
        >
          초기화
        </button>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {likeMovies.map((movie) => {
          return (
            <MovieCard
              key={movie.movie_id}
              id={movie.movie_id}
              title={movie.movie_title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
