import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Search from "./components/Search";
import CategorySelect from "./components/CategorySelect";
import Pages from "./components/Pages";
import "./css/style.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(["popular"]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIES_API}&page=1`;
    getMoviesReq(POPULAR_API);
  }, []); // only called on the first render/mount

  // fetch popular movies from API
  const getMoviesReq = async (API_URL) => {
    const response = await fetch(API_URL); // async func paused until request completes then response assigned object
    const jsonData = await response.json(); // extract json object from fetch response
    setMovies(jsonData.results);
    setLoading(true);
    // error handling
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
  };

  const handleSelect = (e) => {
    setCategory(e.target.value);
    const API_URL = `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=1`;
    getMoviesReq(API_URL);
  };

  const handlePage = (e) => {
    if (category) {
      const PAGE_API = `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=${e.target.value}`;
      getMoviesReq(PAGE_API);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {loading ? (
        <div className="app">
          <div className="nav">
            <CategorySelect select={handleSelect} />
            <Search update={getMoviesReq} />
          </div>
          <div className="movies">
            {movies.length > 0 &&
              movies.map((movie) => <Movie key={movie.id} {...movie} />)}
          </div>
          <Pages updatePage={handlePage} />
        </div>
      ) : (
        <h1>Loading..</h1>
      )}
    </>
  );
}

export default App;
