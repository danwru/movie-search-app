import React from "react";

const Pages = (props) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handlePageClick = (e) => {
    const pageNum = e.target.value;
    props.updatePage(pageNum);
    props.setCurrPage(parseInt(pageNum));
  };

  const handlePageNavClick = (e) => {
    if (e.target.value === "next") {
      const nextPageNum = props.currPage + 1;
      props.updatePage(nextPageNum);
      props.setCurrPage(nextPageNum);
    } else {
      const prevPageNum = props.currPage - 1;
      props.updatePage(prevPageNum);
      props.setCurrPage(prevPageNum);
    }
  };
  return (
    <>
      <div className="pages">
        <button className="page-nav" onClick={handlePageNavClick} value="prev">
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={props.currPage === page ? "highlight" : "no-highlight"}
            key={page}
            onClick={handlePageClick}
            value={page.toString()}
          >
            {page}
          </button>
        ))}
        <button className="page-nav" onClick={handlePageNavClick} value="next">
          Next
        </button>
      </div>
    </>
  );
};

export default Pages;
