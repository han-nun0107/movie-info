import { useContext } from "react";
import {
  handleChangeImage,
  handleUserProfileChange,
} from "../../../utils/handle/handleUserProfileChangeWithFile";
import { MovieContext } from "../../../context/movieContext";

export default function InputFile() {
  const { setUploadImg, uploadImg, setUserInfo, userInfo, setChangeImg } =
    useContext(MovieContext);
  return (
    <>
      <div>
        <input
          type="file"
          accept="imgage/*"
          onChange={(e) => {
            handleUserProfileChange(e, { setUploadImg });
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
          onClick={() =>
            handleChangeImage(uploadImg, setUserInfo, userInfo, setChangeImg)
          }
          className=" mt-3 cursor-pointer bg-blue-300 hover:bg-blue-400 active:bg-blue-500 border rounded-xl h-10"
        >
          프로필 사진 수정
        </button>
      </div>
    </>
  );
}
