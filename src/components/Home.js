import React from "react";
import gc from "../assets/GC.jpg";
import { Link } from "react-router-dom";

export default function Home({ bgPic }) {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="home">
      <h1 onClick={handleClick}>Explore America's National Parks</h1>
      <Link className="exploreBtn" to="/parks">
        Explore Parks
      </Link>
    </div>
  );
}
