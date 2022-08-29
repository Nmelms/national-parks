import React, { useState, useEffect } from "react";
import useFetch from "../services/useFetch";
import FeaturedCard from "./FeaturedCard";

import axios from "axios";

export default function Parks() {
  const [stateCode, setStateCode] = useState(null);
  const [parkData, setParkData] = useState([]);

  const data = [];

  const handleChange = (e) => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?limit=50&stateCode=${e}&api_key=GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913`
      )
      .then((res) => {
        setParkData(res.data.data);
        data.push(res.data);
      });
  };

  return (
    <>
      <div className="parks">
        <header className="parksHeader">
          <h1>Explore Parks</h1>
        </header>
        <div className="selectorWrapper">
          <select
            onChange={(e) => handleChange(e.target.value)}
            name="states"
            id="states"
          >
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
        <div className="selectedParks">
          {parkData.length > 0 &&
            parkData.map((item, index) => {
              console.log(item.images[0].url);
              return (
                <div
                  key={index}
                  className="tempCard"
                  style={{
                    backgroundImage: `url(${item.images[0].url})`,
                    backgroundSize: "cover",
                  }}
                >
                  <h1>{item.fullName}</h1>
                </div>
              );
            })}
        </div>
      </div>
      {/* {parkData.length > 0 &&
        parkData.map((item, idx) => {
          console.log(item);
        })} */}
    </>
  );
}
