import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import MovieGrid from "../components/MovieGrid";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const [searchText, setSearchText] = useState("");
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1);

  // Decide which API endpoint to use based on what the user picked
  let path = "/movie/popular";
  let params = { page };

  if (searchText) {
    path = "/search/movie";
    params = { query: searchText, page };
  } else if (genre) {
    path = "/discover/movie";
    params = { with_genres: genre, page };
  }

  const { data, loading, error } = useFetch(path, params);

  function handleSearch(text) {
    setSearchText(text);
    setGenre("");
    setPage(1);
  }

  function handleGenre(id) {
    setGenre(id);
    setSearchText("");
    setPage(1);
  }

  let title = "Popular movies";
  if (searchText) title = `Results for "${searchText}"`;
  else if (genre) title = "Movies in this category";

  const totalPages = data ? Math.min(data.total_pages, 500) : 1;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <GenreFilter selectedGenre={genre} onSelect={handleGenre} />

      <h2 className="section-title">{title}</h2>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && data && <MovieGrid movies={data.results} />}

      {!loading && !error && data && data.results.length > 0 && (
        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
