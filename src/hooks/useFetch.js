import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { isLoading, hasError, data };
}
