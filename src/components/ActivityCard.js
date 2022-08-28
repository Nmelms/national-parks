import React from "react";

export default function ActivityCard({ dummy, title, descprtion, cardType }) {
  return (
    <div className={cardType}>
      <div className="activityImg">
        <img style={{ height: "100%", width: "100%" }} src={dummy} />
      </div>
      <div className="titleAndDescription">
        <h3>{title}</h3>
        <p>{descprtion}</p>
      </div>
    </div>
  );
}
