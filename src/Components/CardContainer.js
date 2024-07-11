import React from "react";
import {data} from '../Utils/restaurant';

const CardContainer = ({restaurants}) => {
    
  return (
    <>
      <div className="card-container">
        {restaurants}
      </div>
    </>
  );
};

export default CardContainer;
