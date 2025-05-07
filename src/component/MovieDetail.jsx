import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useAsyncDetailMovieData } from "../hooks/movieData";

export default function MovieDetail() {
  const { detailMovies, setDetailMovies, token, navigate } =
    useContext(MovieContext);

  useAsyncDetailMovieData(setDetailMovies, token);

  if (!detailMovies)
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <p className="text-3xl">잘못된 페이지 입니다.</p>
        <div className="flex gap-2">
          <button
            className="
        bg-purple-300 hover:bg-purple-600 active:bg-purple-900
          mt-3.5
          p-2
        text-white
          cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
          <button
            className="
        bg-purple-300 hover:bg-purple-600 active:bg-purple-900
          mt-3.5
          p-2
        text-white
          cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            메인으로
          </button>
        </div>
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
        flex flex-col
        items-center
        "
        >
          <p>제목: {detailMovies.title ? detailMovies.title : "정보 없음"}</p>
          <p>
            평점:{" "}
            {detailMovies.vote_average?.toFixed(2)
              ? detailMovies.vote_average?.toFixed(2)
              : "정보 없음"}
          </p>
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
