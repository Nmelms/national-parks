import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Articles() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/articles?limit=50&api_key=GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913`
      )
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  return (
    <div>
      {data && console.log(data)}
      {data.length > 0 &&
        data.map((article) => (
          // (article) => console.log(article.listingImage)
          <div
            className="articleCard"
            key={article.id}
            style={{ backgroundImage: `url(${article.listingImage.url})` }}
          >
            <h1>hello</h1>
          </div>
        ))}
    </div>
  );
}
