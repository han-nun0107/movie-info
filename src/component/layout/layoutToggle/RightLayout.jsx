import { useContext } from "react";
import { MovieContext } from "../../../context/movieContext";
import IsLoginTrue from "./IsLoginTrue";
import IsLoginFalse from "./IsLoginFalse";

export default function RightLayout() {
  const { isLogin } = useContext(MovieContext);

  return <>{isLogin ? <IsLoginTrue /> : <IsLoginFalse />}</>;
}
