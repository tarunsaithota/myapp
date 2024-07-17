import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchFilter = ({ setListOfRestaurants, filteredData, apiData }) => {
  const [searchText, setSearchText] = useState();
  
  const filterHandler = (e) => {
    setListOfRestaurants(filteredData);
  };

  const searchedData = apiData
    .filter((result) => result.info.name.toLowerCase().includes(searchText))
    .map((result, index) => (
      <Link to={'/restaurant/' + result.info.id} style={{textDecoration: 'none', color: 'inherit'}}><div className="card" key={index}>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_660/${result.info.cloudinaryImageId}`}
          alt={result.name}
        />
        <h3>{result.info.name}</h3>
        <p className="cuisines">{result.info.cuisines.join(", ")}</p>
        <p>⭐{result.info.avgRating} stars</p>
        <p>⌛ETA {result.info.sla?.deliveryTime}min</p>
      </div></Link>
    ));

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
            placeholder={searchText ? '' : " 🔍 search"}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ borderRadius: "15px", height: '25px', width: '250px'}}
          />
          &nbsp;
          <button className="search-btn" onClick={searchhandler} style={{height: '25px'}}>
            Search 🕵🏾
          </button>
        </div>
        <div className="filter-container">
          <button className="filter-btn" onClick={filterHandler}style={{height: '25px'}}>
            Top Rated Restaurants 🍽️
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
