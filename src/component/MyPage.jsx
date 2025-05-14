import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import { useUserInfo } from "../hooks/userInfo";

export default function MyPage() {
  const { userInfo } = useContext(MovieContext);
  console.log(userInfo);

  useUserInfo();

  return (
    <>
      <div className="grid grid-cols-[.2fr_.8fr] border border-t-gray-400 min-h-screen bg-black">
        <div className="flex flex-col items-center text-center bg-amber-200">
          <div>
            이미지
            <img src={userInfo?.profileImageUrl} alt="" />
          </div>
          <div>이름: {userInfo?.userName}</div>
          <div>
            <ul>
              <li>회원정보</li>
              <li>나의 리뷰</li>
              <li>위시리스트</li>
              <li>고객센터</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-gray-500 w-[80%] h-[80%]">1231231312</div>
        </div>
      </div>
    </>
  );
}
