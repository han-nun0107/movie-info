import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";

export default function UserEmail() {
  const { userInfo } = useContext(MovieContext);
  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-600 ">아이디: {userInfo?.email}</p>
      {/* <input
        type="text"
        placeholder="바꿀 이메일을 적어주세요"
        className="border rounded-2xl"
      />
      <button className=" bg-gray-300 rounded-xl border">이메일 수정</button> */}
    </div>
  );
}
