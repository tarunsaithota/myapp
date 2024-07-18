import React from "react";
import useFetchTopRestaurants from "../Utils/useFetchTopRestaurants";
import { renderRestaurantCard } from "./Body";

const TopRestaurants = () => {
  const resData = useFetchTopRestaurants();

  return (
    <>
      <h1 style={{ paddingLeft: "30px", fontSize: "40px", color: "orange" }}>
        Restaurants with online food delivery🍴
      </h1>
      <div className="card-container">
            {resData.map(renderRestaurantCard)}
      </div>
    </>
  );
};

export default TopRestaurants;
