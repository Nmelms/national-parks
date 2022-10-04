import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../services/useFetch";
import FeaturedCard from "./FeaturedCard";
import axios from "axios";

export default function Featured({
  featuredParks,
  setSelectedParkData,
  allData,
}) {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const onSelectedClick = (item) => {
    setSelectedParkData(item);
    navigate("/selected");
  };

  return (
    <div className="featured">
      <h1>Featured Parks</h1>
      {loading && <h1>loading...</h1>}
      {featuredParks.length > 0 &&
        featuredParks.map((item, index) => {
          return (
            <FeaturedCard
              key={index}
              parkCode={item.parkCode}
              item={item}
              onSelectedClick={onSelectedClick}
              setLoading={setLoading}
              name={item.fullName}
              background={item.images[0].url}
            />
          );
        })}
    </div>
  );
}
