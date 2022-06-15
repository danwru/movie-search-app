import React from "react";

const Pages = (props) => {
  const handlePage = (e) => {
    const PAGE_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIES_API}&page=${e.target.value}`;
    props.update(PAGE_API);
  };

  return (
    <>
      <div className="pages">
        <button onClick={handlePage} value="1">
          1
        </button>
        <button onClick={handlePage} value="2">
          2
        </button>
        <button onClick={handlePage} value="3">
          3
        </button>
        <button onClick={handlePage} value="4">
          4
        </button>
        <button onClick={handlePage} value="5">
          5
        </button>
      </div>
    </>
  );
};

export default Pages;
