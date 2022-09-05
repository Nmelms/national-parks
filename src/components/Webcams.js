import React, { useEffect } from "react";
import pic from "../assets/GC.jpg";
import axios from "axios";

export default function Webcams({
  webCams,
  setWebCams,
  activeCams,
  setActiveCams,
}) {
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
    <div>
      <ul>
        {activeCams &&
          activeCams.map((cam) => {
            return (
              <div>
                <a href={cam.url}>
                  <li key={cam.id}>{cam.title}</li>
                </a>
                <img
                  className="webCamImg"
                  src={cam.images[0] ? cam.images[0].url : pic}
                />
              </div>
            );
          })}
      </ul>
      {console.log(webCams)}
    </div>
  );
}
