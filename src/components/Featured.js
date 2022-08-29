import React, { useEffect, useState } from "react";
import useFetch from "../services/useFetch";
import FeaturedCard from "./FeaturedCard";
import axios from "axios";

export default function Featured() {
  const [featuredParks, setFeaturedParks] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { data, loading, setLoading } = useFetch(
  //   `https://developer.nps.gov/api/v1/parks?limit=400&api_key=GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913`
  // );

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?limit=400&api_key=GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  function rand(max) {
    Math.floor(Math.random() * (max + 1));
  }

  const parks = [];

  if (data)
    while (parks.length < 3) {
      let num = Math.floor(Math.random() * (400 + 1));
      if (!parks.includes(data.data[num])) {
        parks.push(data.data[num]);
      }
    }

  return (
    <div className="featured">
      <h1>Featured Parks</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {parks.map((item) => {
        return (
          <FeaturedCard
            loading={loading}
            setLoading={setLoading}
            name={item.fullName}
            background={item.images[0].url}
          />
        );
      })}
    </div>
  );
}
