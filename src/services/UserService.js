// import React, { useState, useEffect } from "react";

// export function getImage() {
//   // const [error, setError] = useState(null);
//   // const [isLoaded, setIsLoaded] = useState(false);
//   const [imageURL, setImageURL] = useState();
//   const API_KEY = "GwaTBYubTD2cu99IdYnM3NlKVj7HupkkxMxYU913";

//   fetch(, {
//     method: "GET",
//     headers: {
//       authorization: API_KEY,
//     },
//   })
//     .then((res) => res.json())
//     .then(
//       (result) => {
//         setImageURL(result.data[1].images[1].url);
//       },

//       (error) => {
//         console.log(error);
//         // setIsLoaded(true);
//         // setError(error);
//       }
//     );

//   return imageURL;
// }
