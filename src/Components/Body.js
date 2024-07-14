import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import SearchFilter from "./SearchFilter";

const Body = () => {

  const[apiData, setApiData] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchRestaurantData = async () => {
    try{
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const json = await response.json();
      const restaurantData = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setApiData(restaurantData);
      setListOfRestaurants(unfilteredData);
    } catch(error) {
      console.error("Error fetching data", error);
    }
   
  }

  useEffect(()=> {
    fetchRestaurantData();
  },[]);

  const filteredData = apiData
  .filter((result) => result.rating)
  .sort((a, b) => b.rating - a.rating)
  .map((result, index) => (
    <div className="card" key={index}>
      <img
        src={
          `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${result.cloudinaryImageId}`
        }
      />
      <h3>{result.name}</h3>
      <p>{result.cuisines}</p>
      <p>{result.avgRating} stars</p>
      <p>ETA {result.sla?.deliveryTime}min</p>
    </div>
  ));
  
  const unfilteredData = apiData.map((result, index) => (
    <div className="card" key={index}>
      <img
        src={
          `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${result.cloudinaryImageId}`
        }
      />
      <h3>{result.name}</h3>
      <p>{result.cuisines}</p>
      <p>{result.avgRating} stars</p>
      <p>ETA {result.sla?.deliveryTime}min</p>
    </div>
  ));

  return (
    <>
      <div className="body">
        <SearchFilter setListOfRestaurants={setListOfRestaurants} filteredData={filteredData} />
        <CardContainer listOfRestaurants={listOfRestaurants} />
      </div>
    </>
  );
};

export default Body;