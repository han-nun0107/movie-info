import { useContext } from "react";
import { MovieContext } from "../../../context/movieContext";
import { useUserInfo } from "../../../hooks/userInfo";
import { handleInputTextChangeImg } from "../../../utils/handle/handleInputTextChangeImg";

export default function InputText() {
  const { setChangeImg, setUserInfo, userInfo, changeImg } =
    useContext(MovieContext);

  useUserInfo();

  return (
    <div className="flex flex-col items-center">
      <div>
        <input
          type="text"
          className="border w-[250px] h-10 rounded-2xl"
          value={changeImg}
          placeholder="이미지 링크를 넣어주세요"
          onChange={(e) => {
            setChangeImg(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() =>
            handleInputTextChangeImg(
              changeImg,
              setUserInfo,
              userInfo,
              setChangeImg
            )
          }
          className=" mt-3 cursor-pointer bg-blue-300 hover:bg-blue-400 active:bg-blue-500 border rounded-xl h-10"
        >
          프로필 사진 수정
        </button>
      </div>
    </div>
  );
}
