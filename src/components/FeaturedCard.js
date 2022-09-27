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
  return (
    <>
      <div
        data-testid="featuredCard"
        onLoad={() => setLoading(false)}
        style={{ backgroundImage: `url(${background})` }}
        onClick={() => onSelectedClick(parkCode)}
        className="imgWrapper"
      >
        <h3 className="featuredName">{name}</h3>
      </div>
    </>
  );
}
