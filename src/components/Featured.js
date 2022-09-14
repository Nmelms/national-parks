import React, { useEffect, useState } from "react";
import useFetch from "../services/useFetch";
import FeaturedCard from "./FeaturedCard";
import axios from "axios";

export default function Featured({ featuredParks }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="featured">
      <h1>Featured Parks</h1>
      {loading && <h1>loading...</h1>}
      {featuredParks &&
        featuredParks.map((item) => {
          return (
            <FeaturedCard
              setLoading={setLoading}
              name={item.fullName}
              background={item.images[0].url}
            />
          );
        })}
    </div>
  );
}
