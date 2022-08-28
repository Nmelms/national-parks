import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <>
      <nav className="nav">
        <h1>national parks</h1>
        <FontAwesomeIcon
          onClick={handleClick}
          className="menuIcon"
          size="2x"
          icon={faBars}
        />
      </nav>
      {showDropDown && <div className="dropDownContent">hello</div>}
    </>
  );
}
