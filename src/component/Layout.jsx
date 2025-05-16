import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import { useLayoutInput } from "../hooks/layoutInput";
import { handleLogout } from "../utils/handle/handleLogin";

export default function Layout() {
  const {
    input,
    setInput,
    isLogin,
    userInfo,
    setUserInfo,
    setIsLogin,
    navigate,
  } = useContext(MovieContext);

  useLayoutInput();

  return (
    <>
      <header className="w-full bg-black px-4 py-3 fixed z-10">
        <nav className="grid grid-cols-[.2fr_1fr_.3fr] items-center">
          <Link to={"/"}>
            <div className="text-2xl text-white font-black">로고</div>
          </Link>
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="
              w-full
            bg-gray-300 
              border border-gray-300 rounded 
              focus:outline-0"
            />
          </div>
          <div className="flex gap-2">
            {isLogin ? (
              <div className="flex flex-row items-center justify-evenly  w-full text-white gap-3">
                <p>toggle</p>
                <p>{userInfo.userName}</p>
                <div className="flex justify-center group relative">
                  <img
                    src={userInfo.profileImageUrl}
                    alt=""
                    className="w-10 h-10 rounded-2xl "
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
            ) : (
              <div>
                <Link to="/login" className={`${btnColor}`}>
                  로그인
                </Link>
                <Link to="/join" className={`${btnColor}`}>
                  회원가입
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}

const btnColor =
  "bg-purple-300 text-white rounded px-2 py-2 cursor-pointer ml-3 hover:bg-purple-600 active:bg-purple-900";
