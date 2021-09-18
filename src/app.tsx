import React, { useState } from "react";
import Counter from "./counter";
import SearchInput from "./search-input";
import MovieList from "./movie-list";

const moviesDB = [
  "Побег из Шоушенка",
  "Крестный отец",
  "Крестный отец 2",
  "Темный рыцарь",
  "Темный рыцарь 1",
  "Темный рыцарь 2",
  "Темный рыцарь 3",
  "Темный рыцарь 4",
];

function App() {
  const [movies, setMovies] = useState(moviesDB);

  const handleSearch = (searchText: string) => {
    setMovies(moviesDB.filter((f) => f.search(searchText) !== -1));
  };

  return (
    <div className="App">
      <SearchInput onSearchClick={handleSearch} />
      <hr />
      <MovieList movieList={movies} />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
