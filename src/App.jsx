import { Outlet } from "react-router-dom";
import movieListData from "./data/movieListData.json";
import MovieCard from "./component/MovieCard";

function App() {
  const movies = movieListData.results;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average.toFixed(2)}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
