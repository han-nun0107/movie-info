import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useParams } from "react-router-dom";
import { useDetailMovieData } from "../hooks/movieData";

export default function MovieDetail() {
  const { detailMovies, setDetailMovies, token, navigate } =
    useContext(MovieContext);
  const { movieId } = useParams();

  // useFetchMovieData(setMovies, token);
  useDetailMovieData(setDetailMovies, token);
  if (!detailMovies)
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <p>정보 없음</p>
        <p>id: {movieId}</p>
        <button
          className="
        bg-purple-300 hover:bg-purple-600 active:bg-purple-900
          p-2
        text-white
          cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </button>
      </div>
    );

  return (
    <div
      className="
    grid grid-cols-[.3fr_.7fr]
    min-h-screen
    "
    >
      {/* 포스터 */}
      <div
        className="
      flex
      justify-center items-center
      border
      "
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${detailMovies.poster_path}`}
          alt=""
          className="w-[60%]"
        />
      </div>
      {/* 상세정보 */}
      <div
        className="
      flex flex-col
      justify-center items-center
      border
      gap-4
      text-[1.5rem]
      "
      >
        <div
          className="
        flex flex-row
        gap-2
        "
        >
          <p>제목: {detailMovies.title}</p>
          <p>평점: {detailMovies.vote_average?.toFixed(2)}</p>
        </div>
        <p>
          장르:{" "}
          {detailMovies.genres?.map((j) => j.name).join(", ") ?? "장르 없음"}
        </p>
        <p className="text-balance text-center">
          {/* 틀렸던 부분 3항 연산자 */}
          줄거리: {detailMovies.overview ? detailMovies.overview : "정보 없음"}
        </p>
        <div>
          <button
            className="
        bg-purple-300 hover:bg-purple-600 active:bg-purple-900
          p-2
        text-white
          cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
