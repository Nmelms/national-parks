import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Parks from "./components/Parks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/parks" element={<Parks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
