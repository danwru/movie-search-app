import Movie from "./components/Movie";
import Search from "./components/Search";
import SelectCategory from "./components/SelectCategory";
import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // fetch popular movies from API
    const getPopularMovies = async () => {
      const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_POPULAR}&page=1`;
      const response = await fetch(POPULAR_API);
      const responseJson = await response.json();
      console.log(responseJson.results);
      setMovies(responseJson.results);
    };

    getPopularMovies();
  }, []); // only called on the first render/mount

  return (
    <>
      <Search />
      <SelectCategory />
      <div className="movies">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
