import React from "react";

const CardContainer = ({listOfRestaurants}) => {
    
  return (
    <>
      <div className="card-container">
        {listOfRestaurants}
      </div>
    </>
  );
};

export default CardContainer;
