import React, { useState } from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => ({ counter: state.counter + 1 }));
  }

  decrement() {
    this.setState((state) => ({ counter: state.counter - 1 }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const SearchInput = ({ onSearchClick }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    onSearchClick(searchText);
  };

  const handleTextSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <h1>Find your movie</h1>
      <input onChange={handleTextSearchChange} value={searchText}></input>
      <button onClick={handleSearchClick}>Find</button>
    </div>
  );
};

function MovieList({ movieList }) {
  return movieList && movieList.length > 0
    ? React.createElement(
        "ul",
        null,
        movieList.map((value, id) => {
          return React.createElement("li", { key: id }, value);
        })
      )
    : React.createElement(
        "h1",
        { className: "header_title" },
        "Nothing to show."
      );
}

const moviesDB = [
  "Побег из Шоушенка",
  "Крестный отец",
  "Крестный отец 2",
  "Темный рыцарь",
  "Темный рыцарь 1",
  "Темный рыцарь 2",
];

function App() {
  const [movies, setMovies] = useState([...moviesDB]);

  const handleSearch = (searchText) => {
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
