import "./App.css";
import React, { useEffect } from "react";
import { getImage } from "./services/UserService.js";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import useFetch from "./services/useFetch";
import Featured from "./components/Featured";
import Activities from "./components/Activities";
import Parks from "./components/Parks";

function App() {
  const API_KEY = "GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913";
  const { data, loading, error, setLoading } = useFetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=az&api_key=${API_KEY}`
  );

  if (error) return <h1>error</h1>;

  return (
    <>
      {/* <NavBar />
      <Home />
      <Featured loading={loading} setLoading={setLoading} />
      <Activities /> */}
      <Parks />
    </>
  );
}

export default App;
