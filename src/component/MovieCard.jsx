import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import { useLikeMovies } from "../hooks/likeMovies";
import { movieLikeButton } from "../utils/movieLikeButton";

export default function MovieCard({ title, poster_path, vote_average, id }) {
  const { userInfo } = useContext(MovieContext);
  const [isLiked, setIsLiked] = useState(false); // 카드마다 개별 상태

  useLikeMovies(userInfo, id, setIsLiked);

  return (
    <>
      <div className="border w-1/7 p-3 group transform hover:scale-105 duration-300">
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
            className="w-full"
          />
          <h3 className="font-bold mt-2 group-hover:underline">{title}</h3>
        </Link>

        <div className="flex justify-between mt-2 items-center">
          <p>평점: {vote_average}</p>
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
            className="text-xl hover:scale-110 duration-200"
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
