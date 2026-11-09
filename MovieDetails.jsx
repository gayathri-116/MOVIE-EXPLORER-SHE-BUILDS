import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IMAGE_URL } from "../api/tmdb";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Rating from "../components/Rating";

function MovieDetails() {
  const { id } = useParams();
  const { data: movie, loading, error } = useFetch(`/movie/${id}`, {
    append_to_response: "credits",
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return null;

  const cast = movie.credits.cast.slice(0, 6).map((person) => person.name);

  return (
    <div>
      <Link to="/" className="back-link">
        ← Back to movies
      </Link>

      <div className="details">
        {movie.poster_path ? (
          <img src={IMAGE_URL + movie.poster_path} alt={movie.title} />
        ) : (
          <div className="no-poster">No poster</div>
        )}

        <div className="details-text">
          <h1>{movie.title}</h1>
          {movie.tagline && <p className="tagline">{movie.tagline}</p>}

          <p>
            <Rating score={movie.vote_average} /> ({movie.vote_count} votes)
          </p>
          <p>
            <strong>Released:</strong> {movie.release_date || "Unknown"}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime ? `${movie.runtime} min` : "Unknown"}
          </p>
          <p>
            <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ") || "None listed"}
          </p>
          <p>
            <strong>Cast:</strong> {cast.join(", ") || "Not available"}
          </p>

          <h3>Overview</h3>
          <p>{movie.overview || "No overview available."}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
