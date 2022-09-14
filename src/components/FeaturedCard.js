import React, { useEffect, useState } from "react";
import { Image, Shimmer } from "react-shimmer";

export default function FeaturedCard({
  name,
  background,
  loading,
  setLoading,
}) {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, [background]);

  // if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="imgWrapper">
        <h3
          // stye={{ background: `url(${background})` }}
          className="featuredName"
        >
          {name}
        </h3>

        <img
          className="featuredImage"
          style={{ display: loading ? "none" : "block" }}
          src={background}
          onLoad={() => setLoading(false)}
        />
      </div>
    </>
  );
}
