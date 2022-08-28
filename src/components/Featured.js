import React, { useEffect, useState } from "react";
import useFetch from "../services/useFetch";

export default function Featured() {
  const [featuredParks, setFeaturedParks] = useState([]);
  const { data, loading } = useFetch(
    `https://developer.nps.gov/api/v1/parks?limit=40&api_key=GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913`
  );
  function rand(max) {
    Math.floor(Math.random() * (max + 1));
  }
  const parks = [];
  if (data)
    for (let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random() * (40 + 1));
      console.log(num);
      parks.push(data.data[num]);
    }
  console.log(parks);
  return <div className="featured">{parks[1].fullName}</div>;
}