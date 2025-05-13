import { useContext, useEffect } from "react";
import { Link, Links, Outlet } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import { useDebounce } from "../hooks/searchMovie";
import { fetchSearchedMovies } from "../utils/SearchMovie";

export default function Layout() {
  const { input, setInput, setMovies, token, isLogin, setIsLogin } =
    useContext(MovieContext);

  const handleLogin = () => {
    setIsLogin(false);
  };

  const debounceInput = useDebounce(input, 500);

  useEffect(() => {
    const search = async () => {
      if (debounceInput.trim() === "") {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: "application/json",
            },
          }
        );
        const data = await res.json();
        setMovies(data.results);
        return;
      }

      const results = await fetchSearchedMovies(debounceInput, token);
      setMovies(results);
    };

    search();
  }, [debounceInput, setMovies, token]);

  return (
    <>
      <header className="w-full bg-black px-3 py-3 fixed z-10">
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
              <div className="flex flex-row items-center justify-around w-full text-white gap-3">
                <div>toggle</div>
                <div className="group relative">
                  <img
                    src="/assets/profile.jpg"
                    alt=""
                    className="w-10 h-10 rounded-2xl "
                  />
                  <ul className="flex-col items-center justify-center gap-2 w-30 h-20 hidden group-hover:flex group-hover:absolute  bg-[#1a1a1a] text-[#fafafb] text-center">
                    <li className="hover:underline cursor-pointer">관심목록</li>
                    <li
                      onClick={handleLogin}
                      className="hover:underline cursor-pointer"
                    >
                      로그아웃
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
      <main className="pt-15">
        <Outlet />
      </main>
    </>
  );
}

const btnColor =
  "bg-purple-300 text-white rounded px-2 py-2 cursor-pointer ml-3 hover:bg-purple-600 active:bg-purple-900";
