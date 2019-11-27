import React from "react";

const SearchBox = props => {
  return (
    <input
      onChange={props.onSearchChange}
      type="search"
      placeholder="search robot"
    ></input>
  );
};

export default SearchBox;
