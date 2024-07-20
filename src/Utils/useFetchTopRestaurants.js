import {useState, useEffect} from "react";

const useFetchTopRestaurants = () => {
  const [resData, setResData] = useState([]);

  const fetchTopRestaurants = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4966976&lng=78.3616081&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const data =
        json.data.cards[1].card.card?.gridElements?.infoWithStyle?.restaurants;
    setResData(data);
  };

  useEffect(() => {
    fetchTopRestaurants();
  }, []);

  return resData;
};

export default useFetchTopRestaurants;
