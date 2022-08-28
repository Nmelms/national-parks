import React from "react";
import dummy from "../assets/GC.jpg";
import ActivityCard from "./ActivityCard";

export default function Activities() {
  return (
    <div className="activities">
      <ActivityCard
        title={"Find A CampGrouned"}
        cardType={"activityCardLeft"}
        descprtion={"Cliick here to explore campgroudn"}
        dummy={dummy}
      />
      <ActivityCard
        cardType={"activityCardRight"}
        title={"Watch Nature WebCams"}
        descprtion={"Cliick here to explore campgroudn"}
        dummy={dummy}
      />
      <ActivityCard
        cardType={"activityCardLeft"}
        title={"Explore activies near you"}
        descprtion={"Cliick here to explore campgroudn"}
        dummy={dummy}
      />
    </div>
  );
}
