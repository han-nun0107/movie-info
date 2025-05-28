import { useContext } from "react";
import { handleLogout } from "../../../utils/handle/handleLogin";
import { MovieContext } from "../../../context/movieContext";
import { Link } from "react-router-dom";

export default function IsLoginTrue() {
  const { userInfo, setIsLogin, navigate, setUserInfo } =
    useContext(MovieContext);
  return (
    <div className="flex flex-row items-center justify-evenly  w-full text-white gap-3">
      <p>toggle</p>
      <p>{userInfo?.userName}</p>
      <div className="flex justify-center group relative">
        <img
          src={userInfo?.avatar_url}
          alt=""
          className="w-10 h-10 rounded-2xl cursor-pointer"
        />
        <ul className="flex-col items-center justify-center gap-2 w-30 h-20 hidden group-hover:flex group-hover:absolute bg-[#1a1a1a] text-[#fafafb] text-center top-10">
          <li
            onClick={(e) =>
              handleLogout(e, { setIsLogin, navigate, setUserInfo })
            }
            className="hover:underline cursor-pointer"
          >
            로그아웃
          </li>
          <li className="hover:underline cursor-pointer">
            <Link to="/myPage">마이페이지</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
