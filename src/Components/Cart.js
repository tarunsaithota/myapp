import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../Utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = (e) => {
    dispatch(clearItems())
  }
  return (
    <>
      <div className="menu" >
        <h1 style={{paddingLeft: "50%", paddingBottom: '1%'}}>Cart</h1>
        {cart.length==0 ? (
          <>
          <center>
            
            <img
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
              alt="cart is empty"
            />
            <h3>Cart is empty...please add items to your cart</h3>
            </center>
          </>
        ): (
            <>
            <div  style={{paddingLeft: "50%", paddingBottom: '4%'}}><button onClick={handleClear} style={{textDecoration: "none", backgroundColor: 'black',color:'white', height: '30px'}}>Clear cart</button></div>
            {cart.map((item) => (
              <>
                <div
                  key={item.card.info.id}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <p style={{ fontWeight: "bolder" }}>{item.card.info.name}</p>
                    <p>💰{item.card.info.price / 100}</p>
                    <p>
                      ⭐{item.card.info.ratings.aggregatedRating.rating} rating
                    </p>
                    <p>{item.card.info.description}</p>
                  </div>
                  <div>
                    <button
                      style={{ position: "absolute", backgroundColor: "orange" }}
                    >
                      Add to cart
                    </button>
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                      style={{
                        paddingTop: "15px",
                        width: "80px",
                        height: "80px",
                      }}
                    />
                  </div>
                </div>
                <hr></hr>
              </>
            ))}
          </>)}
      </div>
    </>
  );
};

export default Cart;
