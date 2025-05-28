import { useContext } from "react";
import { MovieContext } from "../../context/movieContext";

export function DetailButton({ label, location, className, type }) {
  const { navigate } = useContext(MovieContext);
  return (
    <button
      type={type}
      className={className}
      onClick={() => {
        navigate(location);
      }}
    >
      {label}
    </button>
  );
}
