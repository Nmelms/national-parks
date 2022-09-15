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
    console.log("click");
    const selectedPark = allData?.data.filter(
      (item) => item.parkCode === parkCode
    );
    console.log(allData);
    console.log(selectedPark);
    setSelectedParkData(selectedPark[0]);
    navigate("/selected");
  };
  return (
    <div className="featured">
      <h1>Featured Parks</h1>
      {loading && <h1>loading...</h1>}
      {featuredParks &&
        featuredParks.map((item) => {
          return (
            <FeaturedCard
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
