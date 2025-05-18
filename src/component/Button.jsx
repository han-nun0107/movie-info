import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

export function DetailButton({ label, location }) {
  const { navigate } = useContext(MovieContext);
  return (
    <button
      className="
        bg-purple-500 hover:bg-purple-600 active:bg-purple-700
          mt-3.5
          p-2
        text-white
          cursor-pointer
          rounded-2xl"
      onClick={() => {
        navigate(location);
      }}
    >
      {label}
    </button>
  );
}
