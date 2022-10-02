import React, { useEffect } from "react";
import NavBar from "./NavBar";
import img from "../assets/park.jpg";
import { useNavigate } from "react-router-dom";
import { faArrowLeft, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";

export default function SelectedPark({ selectedParkData }) {
  console.log(selectedParkData);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(selectedParkData);
  }, [selectedParkData]);

  let navigate = useNavigate();
  return (
    <div className="selected">
      <NavBar />
      <div
        className="selectedHeader"
        style={{
          backgroundImage:
            selectedParkData.images[1] === undefined
              ? null
              : `url(${selectedParkData.images[1].url})`,
        }}
      >
        <h1>{selectedParkData.fullName}</h1>
        <div className="selectedInfo">
          <div className="location">
            <h4>Location:</h4>
            <p>
              {selectedParkData.addresses[0].city},
              {selectedParkData.addresses[0].stateCode}
            </p>
          </div>
          <div>
            <h4>Entrance Fee:</h4>
            <p>
              {selectedParkData.entranceFees[0] === undefined ? (
                <p>no price available</p>
              ) : (
                selectedParkData.entranceFees[0].cost
              )}
            </p>
            {/* <p>{selectedParkData.entranceFees[0].description}</p> */}
          </div>
          <div>
            <h4>Phone #:</h4>

            {selectedParkData.contacts.phoneNumbers[0] === undefined ? (
              <p>no phone number available</p>
            ) : (
              selectedParkData.contacts.phoneNumbers[0].phoneNumber
            )}
          </div>
        </div>
      </div>

      <div className="selectedDescripton">
        <h1>ABOUT THIS PARK</h1>
        <h2>Description</h2>
        <p>{selectedParkData.description}</p>
        <h2>Climate</h2>
        <p>{selectedParkData.weatherInfo}</p>
        <div
          className="midImg"
          style={{
            backgroundImage:
              selectedParkData.images[2] === undefined
                ? `url(${img})`
                : `url(${selectedParkData.images[2].url})`,
          }}
        >
          {/* <div className="midImg">
          <img src={selectedParkData.images[2].url} /> */}
        </div>
      </div>
      <div className="todo">
        <h2>Things to Do</h2>
        <ul className="todoItem">
          {selectedParkData.activities.map((activity, index) => (
            <div key={index} className="todoItemWrapper">
              <FontAwesomeIcon icon={faTree} />
              <li>{activity.name}</li>
            </div>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
