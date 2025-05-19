import { useState } from "react";
import { MovieContext } from "./movieContext";
import { useNavigate } from "react-router-dom";

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [detailMovies, setDetailMovies] = useState(null);
  const [movieVideo, setMovieVideo] = useState(null);
  const navigate = useNavigate();

  /* 검색기능 */
  const [debounceValue, setDebounceValue] = useState("");
  const [input, setInput] = useState("");

  /* 회원가입, 로그인 */
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [submit, setSubmit] = useState(false);

  /* 좋아요 누른 영화 */
  const [isLiked, setIsLiked] = useState(null);
  const [likeMovies, setLikeMovies] = useState([]);

  /* 닉네임 수정 */
  const [changeName, setChangeName] = useState("");

  /* 프로필 사진 수정 */
  const [changeImg, setChangeImg] = useState("");

  /* 프로필 사진 상태 */
  const [imgState, setImgState] = useState("");

  /* 트레일러 모달 창 */
  const [modalOpen, setModalOpen] = useState(false);

  /* 프로필 file로 업로드 상태 */
  const [uploadImg, setUploadImg] = useState("");

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
        changeName,
        setChangeName,
        changeImg,
        setChangeImg,
        imgState,
        setImgState,
        movieVideo,
        setMovieVideo,
        modalOpen,
        setModalOpen,
        uploadImg,
        setUploadImg,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
