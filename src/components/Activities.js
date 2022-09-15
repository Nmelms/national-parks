import React from "react";
import dummy from "../assets/GC.jpg";
import { Link } from "react-router-dom";
import ActivityCard from "./ActivityCard";

export default function Activities() {
  return (
    <div className="activities">
      <Link className="link" to="/parks">
        <ActivityCard
          title={"Find A Park"}
          cardType={"activityCardLeft"}
          descprtion={"Find A Park Near you"}
          dummy={dummy}
        />
      </Link>
      <Link className="link" to="/webcams">
        <ActivityCard
          cardType={"activityCardRight"}
          title={"Watch Nature WebCams"}
          descprtion={"Cliick here to explore campgroudn"}
          dummy={dummy}
        />
      </Link>
      <ActivityCard
        cardType={"activityCardLeft"}
        title={"Stay up To date"}
        descprtion={"Recent News and alerts"}
        dummy={dummy}
      />
    </div>
  );
}
