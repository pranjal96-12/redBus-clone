import React from "react";
import Red from "./Red";
import img from "../Images/hey.jpeg";
import FirstPage from "./FirstPage";

function Header() {
  return (
    <nav>
      <Red />
      {/* 1st  parent container */}
      <div className="first">
        <FirstPage from="" to="" date="" />
      </div>
      <div className="redbuss">
        <img src={img}></img>
      </div>
    </nav>
  );
}

export default Header;
