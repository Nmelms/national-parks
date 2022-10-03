import React, { useEffect, useState } from "react";
import pic from "../assets/GC.jpg";
import FeaturedCard from "./FeaturedCard";
import axios from "axios";
import Featured from "./Featured";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./NavBar";
import noImg from "../assets/noImg.png";

export default function Webcams() {
  const [loading, setLoading] = useState(true);
  const [webCams, setWebCams] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const res = await fetch(
      `https://developer.nps.gov/api/v1/webcams?limit=500&api_key=GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913`
    );
    if (res.status === 500) {
      setError(true);
      return;
    }
    const data = await res.json();
    const filtered = await data.data.filter((item) => item.status === "Active");
    setWebCams(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="parks">
        <header className="camHeader">
          <h1>Nature Cams</h1>
        </header>
        {error && <div>opps come back later</div>}
        <ul className="camBody">
          {webCams &&
            webCams.map((cam, index) => {
              return (
                <a key={index} className="camLink" href={cam.url}>
                  <div
                    className="camCard"
                    style={{
                      backgroundImage: cam.images[0]
                        ? `url(${cam.images[0].url})`
                        : `url(${noImg})`,
                    }}
                  >
                    <div className="camTitle">{cam.title}</div>
                  </div>
                </a>
              );
            })}
        </ul>
      </div>
    </>
  );
}
