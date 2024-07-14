import React from "react";

const SearchFilter = ({setListOfRestaurants, filteredData}) => {
    const filterHandler = (e) => {
        e.preventDefault();
        setListOfRestaurants(filteredData);
      };
  return (
    <>
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
    </>
  );
};

export default SearchFilter;
