import React from "react";
import "../Component/Seatselect.css";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import BusData from "./BusData";
import { useNavigate } from "react-router-dom";

function SeatSelection(props) {
  let x = 0;
  const [state, setState] = useState(x);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state.from;
  var id;
  var arraySeat = [];

  const onchangeClr = (event) => {
    // setColour(!colour);
    id = event.target.id;
    console.log(id);
    arraySeat.push(id);
    // console.log(arraySeat);

    if (document.getElementById(id).style.color == "blue") {
      // setState(x++);
      document.getElementById(id).style.color = "rgb(185, 184, 184)";
    } else {
      document.getElementById(id).style.color = "blue";

      x++;

      setState(state + 1);
    }
  };

  console.log(arraySeat);
  let price = from.ticketPrice * state;

  const bookTick = (event) => {
    console.log(id);
    console.log(arraySeat);
    navigate("/checkout", {
      state: {
        price: price,
        id: id,
      },
    });
  };

  return (
    <div className="seat">
      <div className="bus__data">
        <BusData className="bus___data" view={from} rating="9/10" />
        {/* {console.log(from.ticketPrice * state)}; */}
        <div className="busrow">
          <div className="busrow_one">
            <AirlineSeatReclineExtraIcon
              id="seat-1"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-2"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-3"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-4"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-5"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-6"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-7"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-8"
              className="airline"
              onClick={onchangeClr}
            />
          </div>
          <div className="busrow_two">
            <AirlineSeatReclineExtraIcon
              id="seat-9"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-10"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-11"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-12"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-13"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-14"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-15"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-16 "
              className="airline"
              onClick={onchangeClr}
            />
          </div>
          <div className="busrow_three">
            <AirlineSeatReclineExtraIcon
              id="seat-17"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-18"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-19"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-20"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-21"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-22"
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-23 "
              className="airline"
              onClick={onchangeClr}
            />
            <AirlineSeatReclineExtraIcon
              id="seat-24 "
              className="airline"
              onClick={onchangeClr}
            />
          </div>
        </div>
        <div className="h1">
          <h1 className="inh1">
            ---------------------------------<span>⇨</span>
          </h1>
        </div>
        <div className="book">
          <button onClick={bookTick}>BOOK TICKET</button>
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;
