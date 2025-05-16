import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useUserInfo } from "../hooks/userInfo";
import supabase from "../../supabaseClient";
import MovieCard from "./MovieCard";
import { useMyPageMovies } from "../hooks/mypageMovie";

export default function UserProfile() {
  const {
    userInfo,
    setUserInfo,
    changeName,
    setChangeName,
    setLikeMovies,
    likeMovies,
  } = useContext(MovieContext);
  useUserInfo();
  useMyPageMovies(userInfo, setLikeMovies, likeMovies);

  const handleChangeName = async () => {
    if (changeName.trim() === "") {
      alert("이름을 적어주세요");
      return;
    }
    const { error } = await supabase.auth.updateUser({
      data: { userName: changeName, profile_image_url: "" },
    });

    if (error) {
      console.error("닉네임 변경 실패", error);
    }
    setUserInfo({ ...userInfo, userName: changeName });
    setChangeName("");
  };
  /* likeMovies 리셋 버튼 */
  const handleReset = async () => {
    if (!userInfo?.id) return;

    const { error } = await supabase
      .from("likes")
      .delete()
      .eq("user_id", userInfo.id);

    if (error) {
      console.error("좋아요 초기화 실패", error);
      return;
    }

    setLikeMovies([]);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-8 py-12">
        <img
          src={userInfo?.profileImageUrl}
          alt="프로필 사진"
          className="rounded-full w-60 h-60 object-cover"
        />
        <div>
          <div className="flex gap-7">
            <p className="text-3xl font-semibold">{userInfo?.userName}</p>
            <div className="mb-2">
              <input
                type="text"
                className="border w-[250px] h-10 rounded-2xl"
                value={changeName}
                placeholder="바꾸고 싶은 닉네임을 적어주세요"
                onChange={(e) => {
                  setChangeName(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleChangeName();
                  }
                }}
              />
              <button
                onClick={handleChangeName}
                className="cursor-pointer w-30 h-10 text-lg border rounded-2xl ml-2 bg-gray-300"
              >
                닉네임 수정
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-3">{userInfo?.email}</p>
          <input
            type="file"
            className="file:mr-4 file:py-2 file:px-4
             file:rounded-full file:border-0
             file:text-sm file:font-semibold
             file:bg-violet-50 file:text-violet-700
             file:cursor-pointer
             hover:file:bg-violet-100"
          />
          <p className="text-red-400 mt-3">프로필 사진 수정</p>
        </div>
      </div>

      <div className="w-[95%] border-t border-t-gray-500">
        <div className="flex justify-between px-10 py-3">
          <h2 className="text-2xl font-bold mb-4">북마크</h2>
          <button
            onClick={handleReset}
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
    </div>
  );
}
