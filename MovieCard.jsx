import { Link } from "react-router-dom";
import { IMAGE_URL } from "../api/tmdb";
import Rating from "./Rating";

function MovieCard({ movie }) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "Unknown";

  return (
    <Link to={`/movie/${movie.id}`} className="card">
      {movie.poster_path ? (
        <img src={IMAGE_URL + movie.poster_path} alt={movie.title} loading="lazy" />
      ) : (
        <div className="no-poster">No poster</div>
      )}
      <div className="card-body">
        <h3>{movie.title}</h3>
        <div className="card-info">
          <span>{year}</span>
          <Rating score={movie.vote_average} />
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
