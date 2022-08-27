import "./App.css";
import React, { useEffect } from "react";
import { getImage } from "./services/UserService.js";
import useFetch from "./services/useFetch";

function App() {
  const API_KEY = "GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913";
  const { data, loading, error } = useFetch(
    `https://developer.nps.gov/api/v1/parks?&api_key=${API_KEY}`
  );
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{console.log(data)}</h1>
    </div>
  );
}

export default App;
