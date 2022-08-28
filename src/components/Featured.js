import React, { useEffect, useState } from "react";
import useFetch from "../services/useFetch";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
  const [featuredParks, setFeaturedParks] = useState([]);
  const { data, loading, setLoading } = useFetch(
    `https://developer.nps.gov/api/v1/parks?limit=40&api_key=GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913`
  );
  function rand(max) {
    Math.floor(Math.random() * (max + 1));
  }

  const parks = [];
  if (data)
    while (parks.length < 3) {
      let num = Math.floor(Math.random() * (40 + 1));
      if (!parks.includes(data.data[num])) {
        parks.push(data.data[num]);
        console.log(data.data[num]);
      }
    }

  return (
    <div className="featured">
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
