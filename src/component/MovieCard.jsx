import { Link } from "react-router-dom";

export default function MovieCard({ title, poster_path, vote_average, id }) {
  return (
    <div className="border w-[200px] p-3">
      <img
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={title}
        className="w-full"
      />
      <Link to={`/movie/${id}`}>
        <h3 className="font-bold mt-2">{title}</h3>
      </Link>
      <p>평점: {vote_average}</p>
    </div>
  );
}
