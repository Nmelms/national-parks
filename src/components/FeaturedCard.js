import React, { useEffect, useState } from "react";
import { Image, Shimmer } from "react-shimmer";

export default function FeaturedCard({
  name,
  parkCode,
  background,
  loading,
  setLoading,
  onSelectedClick,
}) {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, [background]);

  // if (loading) return <h1>Loading...</h1>;

  return (
    <>
      {console.log(background)}
      <div
        onLoad={() => setLoading(false)}
        style={{ backgroundImage: `url(${background})` }}
        onClick={() => onSelectedClick(parkCode)}
        className="imgWrapper"
      >
        <h3 className="featuredName">{name}</h3>

        {/* <img
          className="featuredImage"
          style={{ display: loading ? "none" : "block" }}
          src={background}
          onLoad={() => setLoading(false)}
        /> */}
      </div>
    </>
  );
}
