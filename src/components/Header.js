import React from "react";

const Header = (props) => {
  const formatCategoryTitle = () => {
    if (props.currTab === "select") {
      if (!props.category.includes("_")) {
        return (
          props.category.charAt(0).toUpperCase() +
          props.category.slice(1) +
          " Movies"
        );
      }
      return (
        props.category.charAt(0).toUpperCase() +
        props.category.slice(1, 3) +
        " " +
        props.category.charAt(4).toUpperCase() +
        props.category.slice(5) +
        " Movies"
      );
    } else if (props.currTab === "search") {
      return "Search results for: " + props.currSearch;
    } else if (props.currTab === "genre") {
      return props.currGenre + " Movies";
    }
  };
  return <h2 className="page-header">{formatCategoryTitle()}</h2>;
};

export default Header;
