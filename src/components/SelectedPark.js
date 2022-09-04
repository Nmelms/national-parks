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
      <div className="selectedInfo">
        <div>
          <h4>Location:</h4>
          <p>
            {selectedParkData.addresses[0].city},{" "}
            {selectedParkData.addresses[0].stateCode}
          </p>
        </div>
        <div>
          <h4>Enterence Fee</h4>
          <p>{selectedParkData.entranceFees[0].cost}</p>
          {/* <p>{selectedParkData.entranceFees[0].description}</p> */}
        </div>
        <div>
          <h4>Phone Number:</h4>
          <p>{selectedParkData.contacts.phoneNumbers[0].phoneNumber}</p>
        </div>
        <div>
          <h4>Email:</h4>
          <p>{selectedParkData.contacts.emailAddresses[0].emailAddress}</p>
        </div>
      </div>
      <div className="selectedDescripton">
        <h2>About this park</h2>
        <h3>Description</h3>
        <p>{selectedParkData.description}</p>
        <h2>Climate</h2>
        <p>{selectedParkData.weatherInfo}</p>
        <img
          className="midImg"
          style={{
            backgroundImage: `url(${selectedParkData.images[2].url})`,
          }}
        />
      </div>

      <h2>Things to Do</h2>
      <ul>
        {selectedParkData.activities.map((activity) => (
          <li>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}
