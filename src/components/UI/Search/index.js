import React from "react";
import { TextInput } from "../../Input";

import "./search.css";

const Search = ({ searchTerm, updateSearchTerm, submitHandler }) => {
  return (
    <form className="search-container" onSubmit={submitHandler}>
      <TextInput
        label="Search Restaurants"
        value={searchTerm}
        updateValue={updateSearchTerm}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
