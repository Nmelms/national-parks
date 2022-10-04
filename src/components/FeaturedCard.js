import React, { useEffect, useState } from "react";
import { Image, Shimmer } from "react-shimmer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pic from "../assets/placeholder.png";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function FeaturedCard({
  name,
  parkCode,
  background,
  loading,
  setLoading,
  onSelectedClick,
}) {
  return (
    <>
      <div
        data-testid="featuredCard"
        onLoad={() => setLoading(false)}
        onClick={() => onSelectedClick(parkCode)}
        className="imgWrapper"
      >
        <LazyLoadImage
          effect="blur"
          placeholderSrc={pic}
          src={background}
          height={"100%"}
          width={"100%"}
        />
        <h3 className="featuredName">{name}</h3>
      </div>
    </>
  );
}
