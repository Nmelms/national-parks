import "./App.css";
import React, { useEffect, useState } from "react";
import { getImage } from "./services/UserService.js";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import useFetch from "./services/useFetch";
import Featured from "./components/Featured";
import Activities from "./components/Activities";
import Webcams from "./components/Webcams";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Parks from "./components/Parks";
import SelectedPark from "./components/SelectedPark";
import { act } from "react-dom/test-utils";

function App() {
  const [featuredParks, setFeaturedParks] = useState([]);
  const [parkData, setParkData] = useState(null);
  const [selectedParkCode, setSelectedParkCode] = useState("");
  const [selectedParkData, setSelectedParkData] = useState([]);
  const [webCams, setWebCams] = useState(null);
  const [activeCams, setActiveCams] = useState([]);
  const API_KEY = "GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913";
  const { data, loading, error, setLoading } = useFetch(
    `https://developer.nps.gov/api/v1/parks?limit=400&api_key=${API_KEY}`
  );

  //creates a "featured Parks" array
  useEffect(() => {
    const parks = [];
    if (data) {
      while (parks.length < 3) {
        let num = Math.floor(Math.random() * (400 + 1));
        if (!parks.includes(data.data[num])) {
          parks.push(data.data[num]);
        }
      }
      setFeaturedParks(parks);
    }
  }, [data]);

  if (error) return <h1>error</h1>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home featuredParks={featuredParks} />} />
        <Route
          path="/parks"
          element={
            <Parks
              allData={data}
              selectedParkData={selectedParkData}
              selectedParkCode={selectedParkCode}
              setSelectedParkData={setSelectedParkData}
              setSelectedParkCode={setSelectedParkCode}
            />
          }
        />
        <Route
          path="/selected"
          element={<SelectedPark selectedParkData={selectedParkData} />}
        />
        <Route
          path="/webcams"
          element={
            <Webcams
              activeCams={activeCams}
              setActiveCams={setActiveCams}
              webCams={webCams}
              setWebCams={setWebCams}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
