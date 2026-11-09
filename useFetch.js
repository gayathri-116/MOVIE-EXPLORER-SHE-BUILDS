import { useState, useEffect } from "react";
import { getFromTMDB } from "../api/tmdb";

// Fetches data and keeps track of loading and error state.
function useFetch(path, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // params is an object, so we turn it into a string to use as a dependency
  const paramsKey = JSON.stringify(params);

  useEffect(() => {
    let ignore = false; // stops old requests from overwriting new ones

    async function loadData() {
      setLoading(true);
      setError("");
      try {
        const result = await getFromTMDB(path, JSON.parse(paramsKey));
        if (!ignore) setData(result);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadData();

    return () => {
      ignore = true;
    };
  }, [path, paramsKey]);

  return { data, loading, error };
}

export default useFetch;
