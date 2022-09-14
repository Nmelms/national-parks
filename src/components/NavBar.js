import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faMountainSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <>
      <nav className="nav">
        <Link style={{ textDecoration: "none" }} className="logo" to="/">
          <FontAwesomeIcon
            style={{ padding: "0 .5rem", fontSize: "1.15em", color: "white" }}
            icon={faMountainSun}
          />
          <h3 className="navTitle">NATIONAL PARKS</h3>
        </Link>
        <FontAwesomeIcon
          onClick={handleClick}
          className="menuIcon"
          size="2x"
          icon={faBars}
        />
      </nav>
      {showDropDown && (
        <div className="dropDownContent">
          <Link to="parks">Explore</Link>
          <Link to="webcams">Nature Cams</Link>
        </div>
      )}
    </>
  );
}
