import React from "react";

const SelectCategory = (props) => {
  return (
    <div>
      <ul id="select-category">
        <li className="select-button">
          <button value="now_playing" onClick={props.select}>
            Now Playing
          </button>
        </li>
        <li className="select-button">
          <button value="top_rated" onClick={props.select}>
            Top Rated
          </button>
        </li>
        <li className="select-button">
          <button value="popular" onClick={props.select}>
            Popular
          </button>
        </li>
        <li className="select-button">
          <button value="upcoming" onClick={props.select}>
            Upcoming
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SelectCategory;
