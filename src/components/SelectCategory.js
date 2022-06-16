import React, { useState } from "react";

const SelectCategory = (props) => {
  const [navToggle, setNav] = useState("category-links");

  const handleToggle = () => {
    if (navToggle === "category-links-active") {
      setNav("category-links");
    } else {
      setNav("category-links-active");
    }
  };

  return (
    <>
      <a href="/#" className="mobile-toggle-btn" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={navToggle}>
        <ul id="select-category">
          <li className="category-button">
            <button value="now_playing" onClick={props.select}>
              Now Playing
            </button>
          </li>
          <li className="category-button">
            <button value="top_rated" onClick={props.select}>
              Top Rated
            </button>
          </li>
          <li className="category-button">
            <button value="popular" onClick={props.select}>
              Popular
            </button>
          </li>
          <li className="category-button">
            <button value="upcoming" onClick={props.select}>
              Upcoming
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SelectCategory;
