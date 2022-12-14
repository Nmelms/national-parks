import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../services/useFetch";
import FeaturedCard from "./FeaturedCard";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Featured({
  featuredParks,
  setSelectedParkData,
  allData,
}) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  const onSelectedClick = (item) => {
    setSelectedParkData(item);
    navigate("/selected");
  };

  return (
    <div className="featured">
      <h1>Featured Parks</h1>
      {loading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="featuredLoading"
          visible={true}
        />
      )}
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
