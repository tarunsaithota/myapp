import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import SearchFilter from "./SearchFilter";
import { Link } from "react-router-dom";
import TopRestaurants from "./TopRestaurants";

export const renderRestaurantCard = (result) => (
  <Link to={'/restaurant/' + result.info.id} style={{textDecoration: 'none', color: 'inherit'}}><div className="card" key={result.info.id}>
    <img
      src={`https://media-assets.swiggy.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_660/${result.info.cloudinaryImageId}`}
      alt={result.name}
    />
    <h3>{result.info.name}</h3>
    <p className="cuisines">{result.info.cuisines.join(", ")}</p>
    <p>⭐{result.info.avgRating} stars</p>
    <p>⌛ETA {result.info.sla?.deliveryTime}min</p>
  </div></Link>
);

const Body = () => {
  const [apiData, setApiData] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4966976&lng=78.3616081&&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const restaurantData =
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setApiData(restaurantData);
      setListOfRestaurants(
        restaurantData.map(renderRestaurantCard)
      );
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const filteredData = apiData
    .filter((result) => result.info.avgRating)
    .sort((a, b) => b.info.avgRating - a.info.avgRating)
    .map(renderRestaurantCard);

  return (
    <>
      <div className="body">
        <SearchFilter
          setListOfRestaurants={setListOfRestaurants}
          filteredData={filteredData}
          apiData={apiData}
        />
        <CardContainer apiData={apiData} listOfRestaurants={listOfRestaurants} />
        <TopRestaurants />
      </div>
    </>
  );
};

export default Body;
