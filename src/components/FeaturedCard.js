import React from "react";

export default function FeaturedCard({ name, background }) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="featuredCard"
    >
      {name}
    </div>
  );
}
