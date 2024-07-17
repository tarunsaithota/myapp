import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const menuURL = 'https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4966976&lng=78.3616081&restaurantId='
const RestaurantMenu = () => {
  const [data, setData] = useState(null);
  const [collapse, setCollapse] = useState(false);
  const {resID} = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(menuURL+resID);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const { name, avgRating, costForTwoMessage, cuisines, sla, feeDetails } = data?.data?.cards[2]?.card?.card?.info || {};
  const recommendedItems = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card ?.card?.itemCards || [];
  const biryaniItems = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || [];
  const snackItems = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      {name && (
        <>
          <p>
            ⭐ {avgRating} rating ▪️ 💰 {costForTwoMessage}{" "}
          </p>
          <p style={{ color: "orange" }}>{cuisines?.join(", ")}</p>
          <p>
            🚚 {sla?.lastMileTravelString} 💰{feeDetails?.amount / 100} Delivery fee will apply{" "}
          </p>
        </>
      )}
      <hr></hr>

      <ul>
        <li style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 style={{color: "darkolivegreen"}}>Recommended:</h2>
          <h3 style={{cursor: 'pointer', color: 'gray'}} onClick={(e)=> {setCollapse(!collapse)}}>V</h3>
        </li>
        {!collapse && <div>
        {recommendedItems.map((item) => (
          <>
            <div key={item.card.info.id} className="menu-items">
              <div className="left-side">
                <li>
                  <h2>{item.card.info.name}</h2>
                </li>
                <li>💰{item.card.info.price / 100}</li>
                <li style={{ color: "orange" }}>
                  ⭐{item.card.info.ratings.aggregatedRating.rating} rating
                </li>
                <li>
                  <p>{item.card.info.description}</p>
                </li>
                <button>Add to cart</button>
              </div>
              <div className="right-side">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                  alt={item.card.info.name}
                />
              </div>
            </div>
            <hr></hr>
          </>
        ))}
        </div>}
      </ul>

      <ul>
      <li style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 style={{color: "darkolivegreen"}}>Biryanis:</h2>
          <h3 style={{cursor: 'pointer', color: 'gray'}} onClick={(e)=> {setCollapse(!collapse)}}>V</h3>
        </li>
        {collapse && <div>
        {biryaniItems.map((item) => (
          <>
            <div className="menu-items" key={item.card.info.id}>
              <div className="left-side">
                <li>
                  <h2>{item.card.info.name}</h2>
                </li>
                <li>💰{item.card.info.price / 100}</li>
                <li style={{ color: "orange" }}>
                  ⭐{item.card.info.ratings.aggregatedRating.rating} rating
                </li>
                <li>
                  <p>{item.card.info.description}</p>
                </li>
                <button>Add to cart</button>
              </div>
              <div className="right-side">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                  alt={item.card.info.id}
                />
              </div>
            </div>
            <hr></hr>
          </>
        ))}
        </div>}
      </ul>

      <ul>
      <li style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 style={{color: "darkolivegreen"}}>Shawarma:</h2>
          <h3 style={{cursor: 'pointer', color: 'gray'}} onClick={(e)=> {setCollapse(!collapse)}}>V</h3>
        </li>
        {collapse && <div>
        {snackItems.map((item) => (
          <>
            <div key={item.card.info.id} className="menu-items">
              <div className="left-side">
                <li>
                  <h2>{item.card.info.name}</h2>
                </li>
                <li>💰{item.card.info.price / 100}</li>
                <li style={{ color: "orange" }}>
                  ⭐{item.card.info.ratings.aggregatedRating.rating} rating
                </li>
                <li>
                  <p>{item.card.info.description}</p>
                </li>
                <button>Add to cart</button>
              </div>
              <div className="right-side">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                  alt={item.card.info.name}
                />
              </div>
            </div>
            <hr></hr>
          </>
        ))}
        </div>}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
