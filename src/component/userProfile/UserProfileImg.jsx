import { useUserInfo } from "../../hooks/userInfo";
import InputFileChangeImg from "./changeImg/InputFileChangeImg";
import InputTextChangeImg from "./changeImg/InputTextChangeImg";

export default function UserProfileImg() {
  useUserInfo();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mb-4 border w-[25rem] h-[9rem]">
        <p className="text-xl mb-2">로컬 파일로 프로필 수정하기</p>
        <InputFileChangeImg />
      </div>
      <div className="flex flex-col items-center justify-center border w-[25rem] h-[9rem]">
        <p className="text-xl mb-2">이미지 링크로 프로필 수정하기</p>
        <InputTextChangeImg />
      </div>
    </div>
  );
}
