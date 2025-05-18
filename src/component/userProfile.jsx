import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useUserInfo } from "../hooks/userInfo";
import { useMyPageMovies } from "../hooks/mypageMovie";
import NickName from "./userProfile/NickName";
import UserEmail from "./userProfile/UserEmail";
import UserProfileImg from "./userProfile/UserProfileImg";
import UserBookMark from "./userProfile/UserBookMark";

export default function UserProfile() {
  const { userInfo, setLikeMovies, likeMovies } = useContext(MovieContext);
  useUserInfo();
  useMyPageMovies(userInfo, setLikeMovies, likeMovies);

  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] text-[#fafaf8] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-2xl shadow-xl flex flex-col items-center gap-6 mt-12 mb-8">
        <img
          src={userInfo?.avatar_url}
          alt="프로필 사진"
          className="rounded-full w-40 h-40 object-cover ring-4 ring-yellow-400 shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <NickName />
        <UserEmail />
        <UserProfileImg />
      </div>

      <div className="w-full max-w-6xl px-4">
        <UserBookMark />
      </div>
    </div>
  );
}
