import React from "react";
import Shimmer from "./Shimmer";

const CardContainer = ({listOfRestaurants}) => {
  if(listOfRestaurants.length===0){
    return(
      <Shimmer/>
    )
  } else { 
  return (
    <>
    <h1 style={{paddingLeft: '30px', fontSize: '40px', color: 'orange'}}>Top Restaurants🍴</h1>
      <div className="card-container">
        {listOfRestaurants}
      </div>
    </>
  )}
};

export default CardContainer;
