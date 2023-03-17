import React from "react";
import { useLocation } from "react-router-dom";
import FirstPage from "./FirstPage";
import { useEffect, useState } from "react";
import BusData from "./BusData";
import "../Component/SecondPage.css";
import busLogo from "../Images/buslogo.jpeg";
import SortBy from "./SortBy";

function SecondPage() {
  const [state, setState] = useState([]);
  const [view, setView] = useState([]);
  const location = useLocation();
  let from = location.state?.from;
  let to = location.state?.to;
  let date = location.state?.date;
  useEffect(() => {
    request(from, to);
  }, []);

  function request(fromValue, toValue) {
    return fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${fromValue}&destination=${toValue}`
    )
      .then((response) => response.json())
      .then((response) => {
        setView(response);
      })
      .catch((err) => console.error(err));
  }

  return (
    <React.Fragment>
      <FirstPage from={from} to={to} date={date} />
      <div className="bus_icon">
        <img src={busLogo}></img>
      </div>
      <div className="second_redpg">
        <div className="sort">
          <div className="sortby">
            <SortBy />
          </div>
        </div>
        <div className="second_page">
          {view.map((data) => {
            return <BusData view={data} rating="9/10" />;
          })}
        </div>
        <div className="second_page">
          {view.map((data) => {
            return <BusData view={data} rating="9/10" />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SecondPage;
