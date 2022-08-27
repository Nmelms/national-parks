import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  return (
    <nav className="nav">
      <h1>national parks</h1>
      <FontAwesomeIcon className="menuIcon" size="2x" icon={faBars} />
    </nav>
  );
}
