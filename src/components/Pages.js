import React, { useState } from "react";

const Pages = (props) => {
  const [currPage, setCurrPage] = useState(0);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handlePageClick = (e) => {
    props.updatePage(e);
    setCurrPage(parseInt(e.target.value));
  };
  return (
    <>
      <div className="pages">
        {pages.map((page) => (
          <button
            className={currPage === page ? "highlight" : ""}
            key={page}
            onClick={handlePageClick}
            value={page.toString()}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pages;
