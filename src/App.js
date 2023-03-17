import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CheckIt from "./Component/CheckIt";
import Header from "./Component/Header";
import SeatSelection from "./Component/SeatSelection";
import SecondPage from "./Component/SecondPage";
// import SecondPage from "./Component/SecondPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home">
                <Header />
              </div>
            }
          ></Route>
          <Route
            path="/result"
            element={
              <div className="result">
                <SecondPage />
              </div>
            }
          ></Route>
          <Route
            path="/seat_selection"
            element={
              <div className="seat">
                <SeatSelection />
              </div>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <div className="checkout">
                <CheckIt />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
