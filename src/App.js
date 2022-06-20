import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Search from "./components/Search";
import CategorySelect from "./components/CategorySelect";
import Pages from "./components/Pages";
import "./css/style.css";
import { ReactComponent as Spinner } from "./assets/180-ring-with-bg.svg";

function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [isLoading, setIsLoading] = useState(false);
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIES_API}&page=1`;
    getMoviesReq(POPULAR_API);
  }, []);

  // fetch movies from API
  const getMoviesReq = async (API_URL) => {
    setIsLoading(true);
    const response = await fetch(API_URL); // async func paused until request completes then response assigned object
    const jsonData = await response.json(); // extract json object from fetch response
    setMovies(jsonData.results);
    const timeout = (delay) => {
      return new Promise((res) => setTimeout(res, delay));
    };
    await timeout(300); // to show loading spinner longer
    setIsLoading(false);
    // error handling
    if (!response.ok) {
      setIsLoading(false);
      throw new Error(`HTTP error status: ${response.status}`);
    }
  };

  const handleSelect = (e) => {
    if (e.target.value === "watchlist") {
      setCategory("Your Watchlist");
      setMovies(starred);
    }
    if (e.target.value !== "watchlist" && e.target) {
      setCategory(e.target.value);
      const API_URL = `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=1`;
      getMoviesReq(API_URL);
    }
  };

  const handlePage = (e) => {
    if (category) {
      const PAGE_API = `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US&page=${e.target.value}`;
      getMoviesReq(PAGE_API);
      window.scrollTo(0, 0);
    }
  };

  const getMovieById = async (API_URL) => {
    const response = await fetch(API_URL); // async func paused until request completes then response assigned object
    const jsonData = await response.json(); // extract json object from fetch response
    setStarred((starred) => [...starred, jsonData]);

    if (!response.ok) {
      setIsLoading(false);
      throw new Error(`HTTP error status: ${response.status}`);
    }
  };

  const handleStar = (e) => {
    const MOVIE_API = `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US`;
    getMovieById(MOVIE_API);
  };

  const handleRemoveStar = (e) => {
    e.preventDefault();
    const filter = starred.filter(
      (movie) => parseInt(movie.id) !== parseInt(e.target.value)
    );
    setStarred(filter);
    console.log(filter);
    setMovies(filter);
  };

  return (
    <>
      <div className="nav">
        <CategorySelect select={handleSelect} update={getMoviesReq} />
        <Search update={getMoviesReq} />
      </div>
      {isLoading ? (
        <>
          <div className="temp-loading">
            <Spinner fill="white" />
          </div>
        </>
      ) : (
        <>
          <h2 className="category-title">
            {category.charAt(0).toUpperCase() + category.slice(1)} Movies
          </h2>
          <div className="movies">
            {movies.length > 0 &&
              movies.map((movie) => (
                <Movie
                  save={handleStar}
                  removeSave={handleRemoveStar}
                  key={movie.id}
                  {...movie}
                />
              ))}
            {movies.length === 0 && !isLoading && (
              <div className="no-results">No movies found.</div>
            )}
          </div>
          {movies.length > 0 && category !== "Your Watchlist" && (
            <Pages updatePage={handlePage} />
          )}
        </>
      )}
    </>
  );
}

export default App;
