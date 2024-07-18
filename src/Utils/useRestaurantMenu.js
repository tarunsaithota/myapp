import { useState, useEffect } from "react";

const useRestaurantMenu = (resID) => {
  const menuURL =
    "https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4966976&lng=78.3616081&restaurantId=";
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(menuURL + resID);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };
  return data;
};

export default useRestaurantMenu;
