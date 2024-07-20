import React, { useState } from "react";
import { renderRestaurantCard } from "./Body";

const SearchFilter = ({ setListOfRestaurants, filteredData, apiData }) => {
  const [searchText, setSearchText] = useState();
  const [placeHolder, setPlaceHolder] = useState("🔍 Search")
  
  const filterHandler = (e) => {
    setListOfRestaurants(filteredData);
  };

  const searchedData = apiData
    .filter((result) => result.info.name.toLowerCase().includes(searchText))
    .map(renderRestaurantCard);

  const searchhandler = (e) => {
    e.preventDefault();
    setListOfRestaurants(searchedData);
  };

  return (
    <>
      <div className="search-filters">
        <div className="search-container">
          <input
            type="text"
            name="searchText"
            placeholder={placeHolder}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onClick={(e) => setPlaceHolder("")}
            onBlur={(e) => setPlaceHolder("🔍 Search")}
            style={{ borderRadius: "5px", height: '25px', width: '250px', paddingLeft: '10px'}}
          />
          &nbsp;
          <button className="search-btn" onClick={searchhandler} style={{height: '30px'}}>
            Search 🕵🏾
          </button>
        </div>
        <div className="filter-container">
          <button className="filter-btn" onClick={filterHandler}style={{height: '30px'}}>
            Top Rated Restaurants 🍽️
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
