import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MovieContext } from "../../context/movieContext";
import { useLayoutInput } from "../../hooks/layoutInput";
import RightLayout from "./layoutToggle/RightLayout";
import SearchMovie from "./layoutInput/SearchMovie";

export default function Layout() {
  const { input, setInput } = useContext(MovieContext);

  useLayoutInput();

  return (
    <>
      <header className="w-full bg-black px-4 py-4 fixed z-10">
        <nav className="grid grid-cols-[.2fr_1fr_.3fr] items-center">
          <Link to={"/"}>
            <div className="text-2xl text-white font-black">로고</div>
          </Link>
          <div>
            <SearchMovie
              type={"text"}
              value={input}
              change={(e) => setInput(e.target.value)}
              className="
              w-full
            bg-gray-300 
              border border-gray-300 rounded 
              focus:outline-0"
            />
          </div>
          <div className="flex gap-2">
            <RightLayout />
          </div>
        </nav>
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}
