import React from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const CardContainer = ({listOfRestaurants}) => {
  if(listOfRestaurants.length===0){
    return(
      <Shimmer/>
    )
  } else { 
  return (
    <>
      <div className="card-container">
        {listOfRestaurants}
      </div>
    </>
  )}
};

export default CardContainer;
