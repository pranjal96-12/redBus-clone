import React from "react";
import "../Component/Header.css";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SecondPage from "./SecondPage";

function FirstPage(props) {
  const navigate = useNavigate();
  const [fromValue, setFromValue] = useState(props.from);
  const [toValue, setToValue] = useState(props.to);
  const [dateValue, setDateValue] = useState(props.date);

  const onChangeHandler = (event) => {
    if (event.target.name == "from") {
      setFromValue(event.target.value);
    } else if (event.target.name == "to") {
      setToValue(event.target.value);
    } else {
      setDateValue(event.target.value);
    }
  };
  const swich = (event) => {
    setFromValue(toValue);

    setToValue(fromValue);
  };

  const searchBus = (event) => {
    event.preventDefault();
    // request(fromValue,toValue); //2nd page to be continued,
    navigate("/result", {
      state: {
        from: fromValue,
        to: toValue,
        date: dateValue,
      },
    });
  };

  return (
    <div className="header">
      {/* 1st child  */}
      <div className="frm">
        <label>FROM</label>
        <input
          className="input"
          type="text"
          value={fromValue}
          name="from"
          onChange={onChangeHandler}
        ></input>
      </div>
      {/* 2nd child  */}
      <div className="arrow">
        <SyncAltIcon className="roung" onClick={swich} />
      </div>

      {/* 3rd child  */}
      <div className="frm">
        <label>TO</label>
        <input
          className="input"
          type="text"
          name="to"
          value={toValue}
          onChange={onChangeHandler}
        ></input>
      </div>

      {/* 4th child  */}

      <div className="frm">
        <label>DATE</label>
        <input
          className="input"
          type="date"
          value={dateValue}
          onChange={onChangeHandler}
        ></input>
      </div>

      {/* 5th child  */}

      {/* <Link to="/result"> */}
      <div className="frm">
        <button className="search" onClick={searchBus}>
          SEARCH BUSES
        </button>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default FirstPage;
