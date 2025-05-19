import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import supabase from "../../../supabaseClient";
import { useUserInfo } from "../../hooks/userInfo";
import { toast } from "react-toastify";

export default function UserProfileImg() {
  const { setChangeImg, setUserInfo, userInfo, uploadImg, setUploadImg } =
    useContext(MovieContext);

  useUserInfo();
  const handleChangeImage = async () => {
    if (uploadImg.trim() === "") {
      toast.warn("사진을 선택 해주세요", { toastId: "ChangeImg" });
      return;
    }
    const { error } = await supabase.auth.updateUser({
      data: { avatar_url: uploadImg },
    });
    if (error) {
      console.error("이미지 변경 실패", error);
    }
    setUserInfo({ ...userInfo, avatar_url: uploadImg });
    setChangeImg("");
  };

  const handleUserProfileChange = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setUploadImg(reader.result);
    };
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
        {/* <input
          type="text"
          className="border w-[250px] h-10 rounded-2xl"
          value={changeImg}
          placeholder="이미지 링크를 넣어주세요"
          onChange={(e) => {
            setChangeImg(e.target.value);
          }}
        /> */}
      </div>
      <div>
        <button
          onClick={handleChangeImage}
          className=" mt-3 cursor-pointer bg-blue-300 hover:bg-blue-400 active:bg-blue-500 border rounded-xl h-10"
        >
          프로필 사진 수정
        </button>
      </div>
    </div>
  );
}
