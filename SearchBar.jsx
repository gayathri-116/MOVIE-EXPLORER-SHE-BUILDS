import { useState } from "react";

function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(text.trim());
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
