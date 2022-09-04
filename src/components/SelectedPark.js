import React, { useEffect } from "react";
import NavBar from "./NavBar";

export default function SelectedPark({ selectedParkData }) {
  useEffect(() => {
    console.log(selectedParkData.images[1].url);
  }, [selectedParkData]);
  return (
    <div>
      <NavBar />
      <div
        className="selectedHeader"
        style={{
          backgroundImage: `url(${selectedParkData.images[1].url})`,
        }}
      >
        <h1>{selectedParkData.fullName}</h1>
      </div>
    </div>
  );
}
