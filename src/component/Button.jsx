import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

export function DetailButton({ label, location }) {
  const { navigate } = useContext(MovieContext);
  return (
    <button
      className="
        bg-purple-300 hover:bg-purple-600 active:bg-purple-900
          mt-3.5
          p-2
        text-white
          cursor-pointer"
      onClick={() => {
        navigate(location);
      }}
    >
      {label}
    </button>
  );
}
