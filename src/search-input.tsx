import React, { useState } from "react";

interface Props { 
  onSearchClick: (value: string) => void;
}

const SearchInput = ({ 
  onSearchClick 
}: Props) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    onSearchClick(searchText);
  };

  const handleTextSearchChange = (e: any) => {
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

export default SearchInput;
