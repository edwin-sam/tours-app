import React, { useState } from "react";
import Places from "./data";
import "./index.css";

const App = () => {
  const [data, setData] = useState(Places);

  const removeCity = (city) => {
    let newPlacesArray = [...data];
    let index = newPlacesArray.indexOf(city);
    if (index > -1) {
      newPlacesArray.splice(index, 1);
      setData(newPlacesArray);
    }
  };

  return (
    <article className="article">
      <h1>{data.length > 0 ? 'Our Tours' : 'No Tours Left'}</h1>
      {data.map((place) => {
        return (
          <article key={place.key} className="place">
            <div>
              <img className="img" src={place.img} alt={place.name}></img>
              <h6 className="price">${place.price}</h6>
              <h6 className="bestOf">
                Best of {place.name} in {place.timeLength} Days Tour
              </h6>
              <p className="description">{place.description}</p>
            </div>
            <div>
              <button className="btn" onClick={() => removeCity(place)}>
                Not Interested
              </button>
            </div>
          </article>
        );
      })}
    </article>
  );
};

export default App;
