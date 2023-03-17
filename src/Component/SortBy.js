import React from "react";
import "../Component/SortBy.css";

function SortBy() {
  return (
    <div className="inside">
      <div className="by">
        <h2>SORT BY:</h2>
      </div>
      <div className="depart_arrive">
        <div>
          <label className="departy">Departure</label>
        </div>
      </div>

      <div>
        <label className="arrivy">Arrival</label>
      </div>

      <div>
        <label className="rtnglabl">Rating</label>
      </div>
      <div>
        <label className="pricelabel">Price</label>
      </div>
    </div>
  );
}

export default SortBy;
