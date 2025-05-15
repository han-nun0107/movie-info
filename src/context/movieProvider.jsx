import { useState } from "react";
import { MovieContext } from "./movieContext";
import { useNavigate } from "react-router-dom";

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [detailMovies, setDetailMovies] = useState(null);
  const navigate = useNavigate();

  /* 검색기능 */
  const [debounceValue, setDebounceValue] = useState("");
  const [input, setInput] = useState("");

  /* 회원가입, 로그인 */
  const [isLogin, setIsLogin] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  /* 좋아요 누른 영화 */
  const [isLiked, setIsLiked] = useState(null);
  const [likeMovies, setLikeMovies] = useState([]);

  const token = import.meta.env.VITE_MOVIE_TOKEN_KEY;

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        token,
        navigate,
        detailMovies,
        setDetailMovies,
        debounceValue,
        setDebounceValue,
        input,
        setInput,
        isLogin,
        setIsLogin,
        submit,
        setSubmit,
        userInfo,
        setUserInfo,
        isLiked,
        setIsLiked,
        likeMovies,
        setLikeMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
