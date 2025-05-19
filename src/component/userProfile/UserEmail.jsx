import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";

export default function UserEmail() {
  const { userInfo } = useContext(MovieContext);
  return (
    <div className="flex flex-col items-center">
      <p className="text-[#fafaf8] ">아이디: {userInfo?.email}</p>
    </div>
  );
}
