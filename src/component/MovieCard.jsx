import { Link } from "react-router-dom";

export default function MovieCard({ title, poster_path, vote_average, id }) {
  return (
    <>
      <div
        className="
      border
       w-1/7 p-3
       group
       transform hover:scale-105 duration-300"
      >
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
            className="w-full"
          />
          <h3 className="font-bold mt-2 group-hover:underline">{title}</h3>
          <p>평점: {vote_average}</p>
        </Link>
      </div>

      {/* <div className="
      border border-white 
      h-full 
      p-3 
      group 
      transform hover:scale-105 duration-300"
      >
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
            className="w-full h-[90%]"
          />
          <h3 className="font-bold mt-2 group-hover:underline text-[#fafafb]">
            {title}
          </h3>
          <p className="text-[#fafafb]">평점: {vote_average}</p>
        </Link>
      </div> */}
    </>
  );
}
