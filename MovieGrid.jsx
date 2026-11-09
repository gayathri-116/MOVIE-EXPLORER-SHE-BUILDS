import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
  if (movies.length === 0) {
    return <p className="empty">No movies found. Try a different search.</p>;
  }

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
