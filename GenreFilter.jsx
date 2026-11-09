import useFetch from "../hooks/useFetch";

function GenreFilter({ selectedGenre, onSelect }) {
  const { data } = useFetch("/genre/movie/list");

  // If genres fail to load, we simply hide the filter
  if (!data) return null;

  return (
    <div className="genre-list">
      <button
        className={selectedGenre === "" ? "chip active" : "chip"}
        onClick={() => onSelect("")}
      >
        All
      </button>
      {data.genres.map((genre) => (
        <button
          key={genre.id}
          className={selectedGenre === genre.id ? "chip active" : "chip"}
          onClick={() => onSelect(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
