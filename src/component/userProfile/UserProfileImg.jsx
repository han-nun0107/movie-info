import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import supabase from "../../../supabaseClient";
import { useUserInfo } from "../../hooks/userInfo";

export default function UserProfileImg() {
  const { changeImg, setChangeImg, setUserInfo, userInfo } =
    useContext(MovieContext);
  useUserInfo();
  console.log(changeImg);

  const handleChangeImage = async () => {
    if (changeImg.trim() === "") {
      alert("사진을 선택 해주세요");
      return;
    }
    const { error } = await supabase.auth.updateUser({
      data: { avatar_url: changeImg },
    });
    if (error) {
      console.error("이미지 변경 실패", error);
    }
    setUserInfo({ ...userInfo, avatar_url: changeImg });
    setChangeImg("");
  };

  const handleUserProfileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setChangeImg(imageUrl);
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <input
          type="file"
          accept="imgage/*"
          onChange={handleUserProfileChange}
          className="file:mr-4 file:py-2 file:px-4
             file:rounded-full file:border-0
             file:text-sm file:font-semibold
             file:bg-violet-50 file:text-violet-700
             file:cursor-pointer
             hover:file:bg-violet-100"
        />
        {/*  <input
          type="text"
          className="border"
          value={changeImg}
          onChange={(e) => {
            setChangeImg(e.target.value);
          }} 
        />*/}
      </div>
      <div>
        <button
          onClick={handleChangeImage}
          className=" mt-3 cursor-pointer bg-gray-300 hover:bg-gray-400 active:bg-gray-500 border rounded-xl h-10"
        >
          프로필 사진 수정
        </button>
      </div>
    </div>
  );
}
