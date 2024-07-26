import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";






const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const [collapsedCategories, setCollapsedCategories] = useState({});
  const toggleCollapse = (index) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const { resID } = useParams();

  const data = useRestaurantMenu(resID);

  const { name, avgRating, costForTwoMessage, cuisines, sla, feeDetails } = data?.data?.cards[2]?.card?.card?.info || {};
  const categoryItems =
    data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const listItems = categoryItems?.card?.card?.itemCards?.card?.info
  console.log(listItems);
  const handleCart = (item) => {
    dispatch(addItem(item));
  }


  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
        {name && (
          <>
            <p>⭐ {avgRating} rating ▪️ 💰 {costForTwoMessage}{" "}</p>
            <p style={{ color: "orange" }}>{cuisines?.join(", ")}</p>
            <p>🚚 {sla?.lastMileTravelString} 💰{feeDetails?.amount / 100}{" "} Delivery fee will apply{" "}</p>
          </>
        )}

        {categoryItems?.map((items, index) => (
          <div key={index} className="category-item" style={{}}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 0px",
                borderBottom: '0.5px solid lightGray',
                cursor: "pointer"
              }}
              onClick={() => toggleCollapse(index)}
            >
              <h1 style={{ color: "darkolivegreen" }}>{items.card.card.title}</h1>
              <h1>{collapsedCategories[index] ? "🔺" : "🔻"}</h1>
            </div>
            {collapsedCategories[index] && <div>
              {items.card?.card?.itemCards?.map((item) => (
                <>
                  <div key={item.card.info.id} style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <p style={{ fontWeight: "bolder" }}>{item.card.info.name}</p>
                      <p>💰{item.card.info.price/100}</p>
                      <p>⭐{item.card.info.ratings.aggregatedRating.rating} rating</p>
                      <p>{item.card.info.description}</p>
                    </div>
                    <div>
                      <button style={{ position: "absolute", backgroundColor: 'orange' }} onClick={() => handleCart(item)}>Add to cart</button>
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                        style={{paddingTop:'15px', width: "80px", height: '80px' }}
                      />
                    </div>
                  </div>
                  <hr></hr>
                </>
              ))}
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
