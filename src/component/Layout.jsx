import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="w-full bg-black px-3 py-3 fixed">
        <nav className="grid grid-cols-[.2fr_1fr_.3fr] items-center">
          <Link to={"/"}>
            <div className="text-2xl text-white font-black">로고</div>
          </Link>
          <div>
            <input
              type="text"
              className="
              w-full
            bg-gray-300 
              border border-gray-300 rounded 
              focus:outline-0"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="
            bg-purple-400 text-white
              rounded
              px-2 py-2
              cursor-pointer
            active:bg-purple-600 active:text-white
            "
            >
              로그인
            </button>
            <button
              className="
            bg-purple-400 text-white
              rounded
              px-2 py-2
              cursor-pointer
            active:bg-purple-600 active:text-white
            "
            >
              회원가입
            </button>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
