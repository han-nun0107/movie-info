import { useContext } from "react";
import {
  useAsyncDetailMovieData,
  useAsyncMovieViedo,
} from "../hooks/movieData";
import { useMovieDetailData } from "../hooks/movieDetailData";
import ModalDetail from "./movieDetail/ModalDetail";
import { DetailButton } from "./button/Button";
import { MovieContext } from "../context/movieContext";

export default function MovieDetail() {
  const {
    detailMovies,
    setDetailMovies,
    token,
    setUserInfo,
    setIsLogin,
    setMovieVideo,
  } = useContext(MovieContext);
  const score = detailMovies?.vote_average?.toFixed(2);
  const overview = detailMovies?.overview;
  const title = detailMovies?.title;

  useAsyncDetailMovieData(setDetailMovies, token);
  useAsyncMovieViedo(setMovieVideo, token);
  useMovieDetailData(setUserInfo, setIsLogin);

  if (!detailMovies)
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <p className="text-3xl">Loading...</p>
        <div className="flex gap-2">
          <DetailButton
            label="뒤로가기"
            location={-1}
            className="
        bg-purple-500 hover:bg-purple-600 active:bg-purple-700
          mt-3.5
          p-2
        text-white
          cursor-pointer
          rounded-2xl"
          />
          <DetailButton
            label="메인으로"
            location="/"
            className="
        bg-purple-500 hover:bg-purple-600 active:bg-purple-700
          mt-3.5
          p-2
        text-white
          cursor-pointer
          rounded-2xl"
          />
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#fafaf8]">
      {/* backdrop */}
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${detailMovies?.backdrop_path})`,
        }}
      />
      <div className="flex flex-row gap-6 max-w-5xl mx-auto bg-gray-900 rounded-xl z-10 -my-30 px-10 py-15">
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w300${detailMovies?.poster_path}`}
            alt={title}
            className="w-[200px] h-auto rounded-lg shadow-md"
          />
        </div>
        {/* 영화 정보 */}
        <div className="flex flex-col gap-1">
          <div>
            <p className="text-3xl font-black mb-1">
              {title ? title : "정보 없음"}
            </p>
            <p>평점: {score ? score : "정보 없음"}</p>
          </div>
          <p>
            장르:{" "}
            {detailMovies?.genres?.map((j) => j.name).join(", ") ?? "장르 없음"}
          </p>
          <ModalDetail />
          <p className="text-balance">
            {/* 틀렸던 부분 3항 연산자 */}
            줄거리: {overview ? overview : "정보 없음"}
          </p>
          <div>
            <DetailButton
              label="뒤로가기"
              location={-1}
              className="
        bg-purple-500 hover:bg-purple-600 active:bg-purple-700
          mt-3.5
          p-2
        text-white
          cursor-pointer
          rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
