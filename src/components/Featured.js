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
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  const onSelectedClick = (parkCode) => {
    const selectedPark = allData?.data.filter(
      (item) => item.parkCode === parkCode
    );
    setSelectedParkData(selectedPark[0]);
    navigate("/selected");
  };
  return (
    <div className="featured">
      <h1>Featured Parks</h1>
      {loading && <h1>loading...</h1>}
      {featuredParks.length > 0 &&
        featuredParks.map((item) => {
          return (
            <FeaturedCard
              key={item.id}
              parkCode={item.parkCode}
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
