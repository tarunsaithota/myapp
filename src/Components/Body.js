import React, { useState } from "react";
import CardContainer from "./CardContainer";
import { data } from "../Utils/restaurant";

const Body = () => {
  const unfilteredRes = data.map((result, index) => (
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

  const [restaurants, setRestaurants] = useState(unfilteredRes);

  const filteredData = data
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

  const filterHandler = (e) => {
    e.preventDefault();
    setRestaurants(filteredData);
  };
  return (
    <>
      <div className="body">
        <div className="search-filters">
          <div className="search-container">
            <input type="search" style={{ borderRadius: "5px" }} />
            <button className="search-btn">Search</button>
          </div>
          <div className="filter-container">
            <button className="filter-btn" onClick={filterHandler}>
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="res-container">
          <CardContainer restaurants={restaurants} />
        </div>
      </div>
    </>
  );
};

export default Body;
