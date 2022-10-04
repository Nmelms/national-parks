import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import useFetch from "../services/useFetch";
import FeaturedCard from "./FeaturedCard";
import pic from "../assets/placeholder.png";
import { faArrowLeft, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";

import axios from "axios";

export default function Parks({
  setSelectedParkCode,
  setSelectedParkData,
  selectedParkData,
  selectedParkCode,
  allData,
}) {
  const [stateCode, setStateCode] = useState(null);
  const [parkData, setParkData] = useState([]);

  const data = [];
  let navigate = useNavigate();

  //finds selected park in data
  const onSelectedClick = (item) => {
    setSelectedParkData(item);
    navigate("/selected");
  };

  const handleChange = async (e) => {
    const res = await fetch(
      `https://developer.nps.gov/api/v1/parks?limit=50&stateCode=${e}&api_key=GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913`
    );
    const data = await res.json();
    setParkData(data.data);
  };

  return (
    <>
      <NavBar />
      <div className="parks">
        <header className="parksHeader">
          <h1>EXPLORE PARKS</h1>
        </header>
        <div className="selectorWrapper">
          <select
            data-testid="dropDown"
            onChange={(e) => handleChange(e.target.value)}
            name="states"
            id="states"
            defaultValue="none"
          >
            <option value="none" disabled hidden>
              Select a State
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        {parkData.length === 0 && (
          <div className="noData">
            <h2>Select a state to start exploring.</h2>{" "}
            <FontAwesomeIcon icon={faTree} size="4x" />
          </div>
        )}
        <div className="selectedParks">
          {parkData.length > 0 &&
            parkData.map((item, index) => {
              return (
                <div
                  data-testid="card"
                  parkcode={item.parkCode}
                  key={index}
                  className="parkCard"
                  onClick={() => onSelectedClick(item)}
                >
                  <LazyLoadImage
                    effect="blur"
                    className="lazyImg"
                    placeholderSrc={pic}
                    width={"100%"}
                    src={item.images[0].url}
                  />
                  <h1 className="parkName">{item.fullName}</h1>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
