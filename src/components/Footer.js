import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>Made possible by the National Park API</p>
      <p>
        For more information about national parks visit the{" "}
        <a style={{ color: "white" }} href="https://www.nps.gov/">
          {" "}
          National Park Service website.
        </a>
      </p>
    </div>
  );
}
