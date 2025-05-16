import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import supabase from "../../../supabaseClient";

export default function UserProfileImg() {
  const { changeImg, setChangeImg, setUserInfo, userInfo } =
    useContext(MovieContext);

  const handleChangeImage = async () => {
    const { error } = await supabase.auth.updateUser({
      data: { profile_image_url: changeImg },
    });
    if (error) {
      console.error("이미지 변경 실패", error);
    }
    setUserInfo({ ...userInfo, profile_image_url: changeImg });
    setChangeImg("");
  };
  return (
    <div className="flex flex-col items-center">
      <div>
        <input
          type="file"
          value={changeImg}
          onChange={(e) => {
            setChangeImg(e.target.value);
          }}
          className="file:mr-4 file:py-2 file:px-4
             file:rounded-full file:border-0
             file:text-sm file:font-semibold
             file:bg-violet-50 file:text-violet-700
             file:cursor-pointer
             hover:file:bg-violet-100"
        />
      </div>
      <div>
        <button
          onClick={handleChangeImage}
          className=" mt-3 cursor-pointer bg-gray-300 border rounded-xl h-10"
        >
          프로필 사진 수정
        </button>
      </div>
    </div>
  );
}
