import Movie from "./components/Movie";
import Search from "./components/Search";
import SelectCategory from "./components/SelectCategory";
import React from "react";

const theShining = {
  title: "The Shining",
  rating: 8.4,
  desc: "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.",
};

function App() {
  return (
    <>
      <h1>Movie Search App</h1>
      <Search />
      <SelectCategory />
      <Movie
        title={theShining.title}
        rating={theShining.rating}
        desc={theShining.desc}
      />
    </>
  );
}

export default App;
