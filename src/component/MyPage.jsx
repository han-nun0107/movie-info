import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useUserInfo } from "../hooks/userInfo";
import MovieCard from "./MovieCard";
import { useMyPageMovies } from "../hooks/mypageMovie";
import { Link } from "react-router-dom";

export default function MyPage() {
  const { userInfo, likeMovies, setLikeMovies } = useContext(MovieContext);

  useUserInfo();
  useMyPageMovies(userInfo, setLikeMovies, likeMovies);

  return (
    <>
      <div className="grid grid-cols-[0.25fr_1fr] bg-[#1a1a1a] border-gray-500 border-t-2 text-[#fafaf8]">
        {/* 왼쪽 */}
        <div className="flex flex-col items-center justify-center  text-black py-8 space-y-8 shadow-md">
          {/* 프로필 이미지 */}
          <img
            src={userInfo?.avatar_url}
            alt="프로필 사진"
            className="rounded-full w-28 h-28 object-cover border-2 border-white shadow-sm"
          />

          {/* 사용자 이름 */}
          <p className="text-lg font-semibold text-[#fafaf8]">
            이름: {userInfo?.name}
          </p>

          {/* 메뉴 */}
          <ul className="text-base font-medium text-[#fafaf8]">
            <Link to={"/userprofile"}>
              <li className={`${liClass}`}>회원정보</li>
            </Link>
            <li className={`${liClass}`}>나의 리뷰</li>
            <li className={`${liClass}`}>위시리스트</li>
            <li className={`${liClass}`}>고객센터</li>
          </ul>
        </div>

        {/* 오른쪽 */}
        <div className="flex items-center justify-center p-6">
          <div className="bg-gray-700 w-[80%] min-h-[839px] rounded-xl shadow-lg text-xl">
            <div className="my-5 mx-5 text-3xl text-[#fafaf8] font-black border-b-2">
              WISHLIST
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {likeMovies.map((movie) => (
                <MovieCard
                  key={movie.movie_id}
                  id={movie.movie_id}
                  title={movie.movie_title}
                  poster_path={movie.poster_path}
                  vote_average={movie.vote_average}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const liClass = `hover:underline cursor-pointer text-[#fafaf8]`;
