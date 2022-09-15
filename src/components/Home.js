import React from "react";
import gc from "../assets/GC.jpg";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Featured from "./Featured";
import Activities from "./Activities";
import Footer from "./Footer";

export default function Home({
  bgPic,
  featuredParks,
  setSelectedParkData,
  allData,
}) {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <>
      <NavBar />
      <div className="home">
        <h1 onClick={handleClick}>Explore America's National Parks</h1>
        <Link className="exploreBtn" to="/parks">
          Explore Parks
        </Link>
      </div>
      <Featured
        allData={allData}
        setSelectedParkData={setSelectedParkData}
        featuredParks={featuredParks}
      />
      <Activities />
      <Footer />
    </>
  );
}
