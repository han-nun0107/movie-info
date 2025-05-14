import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useAsyncDetailMovieData } from "../hooks/movieData";
import { DetailButton } from "./Button";
import { useMovieDetailData } from "../hooks/movieDetailData";

export default function MovieDetail() {
  const { detailMovies, setDetailMovies, token, setUserInfo, setIsLogin } =
    useContext(MovieContext);
  useAsyncDetailMovieData(setDetailMovies, token);
  const score = detailMovies?.vote_average?.toFixed(2);
  const overview = detailMovies?.overview;
  const title = detailMovies?.title;

  useMovieDetailData(setUserInfo, setIsLogin);

  if (!detailMovies)
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <p className="text-3xl">Loading...</p>
        <div className="flex gap-2">
          <DetailButton label="뒤로가기" location={-1} />
          <DetailButton label="메인으로" location="/" />
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
          <p>제목: {title ? title : "정보 없음"}</p>
          <p>평점: {score ? score : "정보 없음"}</p>
        </div>
        <p>
          장르:{" "}
          {detailMovies?.genres?.map((j) => j.name).join(", ") ?? "장르 없음"}
        </p>
        <p className="text-balance text-center">
          {/* 틀렸던 부분 3항 연산자 */}
          줄거리: {overview ? overview : "정보 없음"}
        </p>
        <div>
          <DetailButton label="뒤로가기" location={-1} />
        </div>
      </div>
    </div>
  );
}
