import React, { useState } from "react";
import { RestaurantList } from "../components/Restaurant";
import { Search } from "../components/UI";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const updateSearchTerm = (value) => {
    setSearchSubmitted(false);
    setSearchTerm(value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    if (searchTerm) {
      setSearchSubmitted(true);
    }
  };

  const restaurantProps = searchSubmitted ? { searchTerm } : {};

  return (
    <>
      <Search
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        submitHandler={submitSearch}
      />
      <RestaurantList {...restaurantProps} />
    </>
  );
};

export default Home;
