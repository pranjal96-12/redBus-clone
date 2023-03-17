import React from "react";
import SeatSelection from "./SeatSelection";
import { useLocation } from "react-router-dom";
import "../Component/CheckIt.css";
import image from "../Images/redbus.webp";

function CheckIt() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="chck" src={image}></img>
        <div>
          <h4 className="check_title">Your Shopping Basket</h4>
        </div>
      </div>
      <div className="checkout_right">
        <h1>Your amount is</h1>
        {location.state.price}
      </div>
    </div>
  );
}

export default CheckIt;
