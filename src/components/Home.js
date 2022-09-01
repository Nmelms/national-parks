import React from "react";
import gc from "../assets/GC.jpg";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Featured from "./Featured";
import Activities from "./Activities";

export default function Home({ bgPic, featuredParks }) {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="home">
      <NavBar />
      <h1 onClick={handleClick}>Explore America's National Parks</h1>
      <Link className="exploreBtn" to="/parks">
        Explore Parks
      </Link>
      <Featured featuredParks={featuredParks} />
      <Activities />
    </div>
  );
}
