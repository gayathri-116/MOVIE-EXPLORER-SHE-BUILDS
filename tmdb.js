// Small helper for talking to The Movie Database (TMDB) API.
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// path: e.g. "/movie/popular", params: e.g. { page: 2 }
export async function getFromTMDB(path, params = {}) {
  if (!API_KEY) {
    throw new Error("Missing API key. Add VITE_TMDB_API_KEY to your .env file.");
  }

  const query = new URLSearchParams({ api_key: API_KEY, ...params });
  const response = await fetch(`${BASE_URL}${path}?${query}`);

  if (!response.ok) {
    throw new Error(`Request failed (status ${response.status}). Please try again.`);
  }

  return response.json();
}
