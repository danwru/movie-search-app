import React from "react";

const Pages = (props) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="pages">
        {pages.map((page) => (
          <button key={page} onClick={props.updatePage} value={page.toString()}>
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pages;
