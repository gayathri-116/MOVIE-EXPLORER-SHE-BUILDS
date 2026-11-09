# Movie Explorer

A React app to search and browse movies using the TMDB API.

## Features
- Search movies by title
- Filter by genre (category)
- Movie details page (overview, cast, runtime, genres)
- Ratings with colour coding
- Responsive layout
- Loading spinner and error messages

## Tech used
React, React Router, custom hook (`useFetch`), Vite

## Setup
1. Get a free API key at https://www.themoviedb.org/settings/api
2. Copy `.env.example` to `.env` and paste your key
3. Run:
   ```
   npm install
   npm run dev
   ```

## Deploy (Netlify / Vercel)
- Build command: `npm run build`, output folder: `dist`
- Add `VITE_TMDB_API_KEY` as an environment variable in the host's settings.
- The app uses HashRouter, so page refreshes work without extra config.

## Folder structure
```
src/
  api/          API helper
  hooks/        useFetch hook
  components/   reusable UI pieces
  pages/        Home, MovieDetails, NotFound
```

## AI-assisted activity notes
- **Generating components:** AI was used to draft the first version of the card, grid and filter components.
- **Refactoring:** repeated fetch code in pages was moved into the `useFetch` hook; `Rating`, `Loader` and `ErrorMessage` were split out so they can be reused.
- **State troubleshooting:** AI helped find a bug where an old request overwrote a newer one; fixed with the `ignore` flag in `useFetch`.

(Edit this section so it describes what you actually did.)
