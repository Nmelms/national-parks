import "./App.css";
import React, { useEffect } from "react";
import { getImage } from "./services/UserService.js";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import useFetch from "./services/useFetch";

function App() {
  const API_KEY = "GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913";
  const { data, loading, error } = useFetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=az&api_key=${API_KEY}`
  );
  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>error</h1>;
  {
    console.log(data);
  }

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
