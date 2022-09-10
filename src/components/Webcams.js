import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../assets/GC.jpg";
import FeaturedCard from "./FeaturedCard";
import axios from "axios";
import Featured from "./Featured";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./NavBar";

export default function Webcams({
  webCams,
  setWebCams,
  activeCams,
  setActiveCams,
}) {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/webcams?limit=500&api_key=GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913`
      )
      .then((res) => {
        setWebCams(res.data.data);
      });
  }, []);

  useEffect(() => {
    if (webCams) {
      const filtered = webCams.filter((item) => item.status === "Active");
      setActiveCams(filtered);
    }
  }, [webCams]);

  return (
    <div className="webcams">
      <NavBar />
      <header className="webcamHeader">Nature Webcams</header>
      <FontAwesomeIcon
        className="webCamBackBtn"
        onClick={() => navigate("/")}
        icon={faArrowLeft}
      />
      <ul>
        {activeCams &&
          activeCams.map((cam) => {
            console.log(cam);
            return (
              <div
                className="camCard"
                style={{
                  backgroundImage: cam.images[0]
                    ? `url(${cam.images[0].url})`
                    : `url(${pic})`,
                }}
              >
                <div className="camTitle">{cam.title}</div>
              </div>
              // <div>
              //   <a href={cam.url}>
              //     <li key={cam.id}>{cam.title}</li>
              //   </a>
              //   <img
              //     className="webCamImg"
              //     src={cam.images[0] ? cam.images[0].url : pic}
              //   />
              // </div>
            );
          })}
      </ul>
      {console.log(webCams)}
    </div>
  );
}
