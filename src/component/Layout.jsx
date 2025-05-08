import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import { useDebounce } from "../hooks/searchMovie";

export default function Layout() {
  const { input, setInput } = useContext(MovieContext);

  const debounceInput = useDebounce(input, 500);

  useEffect(() => {
    if (debounceInput) {
      console.log("호출", debounceInput);
    }
  }, [debounceInput]);

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
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
      <main className="pt-[60px]">
        <Outlet />
      </main>
    </>
  );
}
