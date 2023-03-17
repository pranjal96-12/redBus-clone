import React from "react";
import "../Component/BusData.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function BusData(props) {
  const navigate = useNavigate();
  const onClicking = (event) => {
    const arr = event.target;
    console.log(arr);
    navigate("/seat_selection", {
      state: {
        from: props.view,
      },
    });
  };

  return (
    <div className="busname_mainsecn">
      <div className="busdata" onClick={onClicking}>
        <div className="bus_name">
          <h2>{props.view.busName}</h2>
        </div>

        <div className="busarrival">
          <div className="depart">
            <label>DEPARTURE</label>
            <h2>{props.view.departureTime}</h2>
          </div>
          <div className="arrive">
            <label>ARRIVAL</label>
            <h2>{props.view.arrivalTime}</h2>
          </div>
        </div>
        <div className="rating_price">
          <div className="rating">
            <h2 className="rate">{props.rating}</h2>
          </div>

          <div className="price">
            <h2>{props.view.ticketPrice}/-</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BusData;
