import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useUserInfo } from "../hooks/userInfo";
import supabase from "../../supabaseClient";

export default function UserProfile() {
  const { userInfo, setUserInfo } = useContext(MovieContext);
  useUserInfo();

  const handleChangeName = async () => {
    const { error } = await supabase
      .from("user_table")
      .update({ name: "piano" })
      .eq("user_id", userInfo.id);

    if (error) return console.error("닉네임 변경 실패", error);
    setUserInfo({ ...userInfo, name: "piano" });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-8 py-12 ">
        <img
          src={userInfo?.profileImageUrl}
          alt="프로필 사진"
          className="rounded-full w-60 h-60 object-cover"
        />
        <div>
          <div className="flex gap-7">
            <p className="text-3xl font-semibold">{userInfo?.userName}</p>
            <button onClick={handleChangeName} className="cursor-pointer">
              닉네임 수정
            </button>
          </div>
          <p className="text-gray-600">{userInfo?.email}</p>
          <p className="text-red-400">프로필 사진 수정</p>
        </div>
      </div>

      <div className="w-[95%] border-t border-t-gray-500">
        <div className="flex justify-between px-10 py-3">
          <h2 className="text-2xl font-bold mb-4">북마크</h2>
          <p>초기화</p>
        </div>
      </div>
    </div>
  );
}
