import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const API_KEY = "GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  }, [url]);

  return { data, loading, error, setLoading };
}
