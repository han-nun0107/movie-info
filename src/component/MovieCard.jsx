import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import { useLikeMovies } from "../hooks/likeMovies";
import { movieLikeButton } from "../utils/movieLikeButton";

export default function MovieCard({ title, poster_path, vote_average, id }) {
  const { userInfo } = useContext(MovieContext);
  const [isLiked, setIsLiked] = useState(false); // 카드마다 개별 상태

  useLikeMovies(userInfo, id, setIsLiked, isLiked);

  return (
    <>
      <div className="max-w-[200px] p-3 border border-gray-700 rounded-lg bg-[#1c1c1c] group transform hover:scale-105 transition-transform duration-300">
        <Link to={`/movie/${id}`}>
          <div className="h-[300px] rounded">
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-[#fafaf8] font-semibold mt-2 text-sm group-hover:underline">
            {title}
          </h3>
        </Link>

        <div className="flex justify-between items-center mt-2">
          <p className="text-yellow-400 text-sm">⭐ {vote_average}</p>
          <button
            onClick={() =>
              movieLikeButton({
                userInfo,
                id,
                title,
                poster_path,
                vote_average,
                isLiked,
                setIsLiked,
              })
            }
            className="text-xl hover:scale-110 transition-transform duration-200"
          >
            {isLiked ? "❤️" : "🤍"}
          </button>
        </div>
      </div>

      {/* <div className="
      border border-white 
      h-full 
      p-3 
      group 
      transform hover:scale-105 duration-300"
      >
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
            className="w-full h-[90%]"
          />
          <h3 className="font-bold mt-2 group-hover:underline text-[#fafafb]">
            {title}
          </h3>
          <p className="text-[#fafafb]">평점: {vote_average}</p>
        </Link>
      </div> */}
    </>
  );
}
