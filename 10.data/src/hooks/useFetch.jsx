import { useState, useEffect } from "react";

export default function useFetch(URI) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!URI) return;
    fetch(URI)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false)) // чтобы происходило после успешного завершения fetch
      .catch(setError)
  }, [URI]);

  return {
    loading,
    data,
    error
  };
}