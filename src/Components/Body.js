import React, { useState } from "react";
import CardContainer from "./CardContainer";
import { data } from "../Utils/restaurant";
import SearchFilter from "./SearchFilter";

export const filteredData = data
  .filter((result, index) => result.rating)
  .sort((a, b) => b.rating - a.rating)
  .map((result, index) => (
    <div className="card" key={index}>
      <img
        src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
        alt="img"
      />
      <h3>{result.restaurantName}</h3>
      <p>{result.cuisine}</p>
      <p>{result.rating} stars</p>
      <p>ETA {result.etaMinutes}min</p>
    </div>
  ));

const Body = () => {
  const unfilteredData = data.map((result, index) => (
    <div className="card" key={index}>
      <img
        src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
        alt="img"
      />
      <h3>{result.restaurantName}</h3>
      <p>{result.cuisine}</p>
      <p>{result.rating} stars</p>
      <p>ETA {result.etaMinutes}min</p>
    </div>
  ));

  const [listOfRestaurants, setListOfRestaurants] = useState(unfilteredData);

  return (
    <>
      <div className="body">
        <SearchFilter setListOfRestaurants={setListOfRestaurants} />
        <CardContainer listOfRestaurants={listOfRestaurants} />
      </div>
    </>
  );
};

export default Body;