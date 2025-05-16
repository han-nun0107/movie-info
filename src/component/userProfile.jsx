import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useUserInfo } from "../hooks/userInfo";
import { useMyPageMovies } from "../hooks/mypageMovie";
import NickName from "./userProfile/NickName";
import UserEmail from "./userProfile/UserEmail";
import UserProfileImg from "./userProfile/UserProfileImg";
import UserBookMark from "./userProfile/UserBookmark";

export default function UserProfile() {
  const { userInfo, setLikeMovies, likeMovies } = useContext(MovieContext);
  useUserInfo();
  useMyPageMovies(userInfo, setLikeMovies, likeMovies);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 py-12">
        <img
          src={userInfo?.avatar_url}
          alt="프로필 사진"
          className="rounded-full w-60 h-60 object-cover"
        />
        <NickName />
        <UserEmail />
        <UserProfileImg />
      </div>
      <UserBookMark />
    </div>
  );
}
