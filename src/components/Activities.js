import React from "react";
import map from "../assets/map.jpg";
import tree from "../assets/webcamTree.jpg";
import { Link } from "react-router-dom";
import ActivityCard from "./ActivityCard";

export default function Activities() {
  return (
    <div className="activities">
      <Link data-testid="parks" className="link" to="/parks">
        <ActivityCard
          title={"Find A Park"}
          cardType={"activityCardLeft"}
          descprtion={"Find A Park Near you"}
          dummy={map}
        />
      </Link>
      <Link data-testid="webcams" className="link" to="/webcams">
        <ActivityCard
          cardType={"activityCardRight"}
          title={"Watch Nature WebCams"}
          descprtion={"Click here to watch nature cams"}
          dummy={tree}
        />
      </Link>
    </div>
  );
}
