import { useNavigate, useParams } from "react-router-dom";
import movieDetailData from "../data/movieDetailData.json";

export default function MovieDetail() {
  const { movieId } = useParams();
  const movie = movieDetailData.find((m) => m.id === Number(movieId));
  const navigate = useNavigate();

  if (!movie) return <div>정보 없음</div>;
  return (
    <div
      className="
    grid grid-cols-[.3fr_.7fr]
    min-h-screen
    "
    >
      {/* 포스터 */}
      <div
        className="
      flex
      justify-center items-center
      border
      "
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
          className="w-[60%]"
        />
      </div>
      {/* 상세정보 */}
      <div
        className="
      flex flex-col
      justify-center items-center
      border
      gap-4
      text-[1.5rem]
      "
      >
        <div
          className="
        flex flex-row
        gap-2
        "
        >
          <p>제목: {movie.title}</p>
          <p>평점: {movie.vote_average.toFixed(2)}</p>
        </div>
        <p>장르: {movie.genres.map((j) => j.name).join(", ")}</p>
        <p className="text-balance text-center">줄거리: {movie.overview}</p>
        <div>
          <button
            className="bg-purple-300 text-white active:bg-purple-600"
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
