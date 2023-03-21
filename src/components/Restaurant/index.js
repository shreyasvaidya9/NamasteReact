import React, { useMemo } from "react";
import RestaurantCard from "./RestaurantCard";

import "./Restaurant.css";
import {
  SWIGGY_RESTAURANT_DATA,
  CLOUDINARY_IMAGE_STRING,
} from "./restaurant-dummy-data";

const Restaurant = ({ searchTerm }) => {
  const restaurantData = SWIGGY_RESTAURANT_DATA?.data?.data?.cards;

  const restaurantList = useMemo(() => {
    const justRestaurantData = restaurantData.map((item) => item?.data);

    // Return the complete restaurants list if no search term is present
    if (!searchTerm) {
      return justRestaurantData;
    }

    // Return the restaurants filtered with the search term
    return justRestaurantData?.filter((restaurant) =>
      restaurant?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="restaurant-list">
      {restaurantList.length > 0 ? (
        restaurantList?.map((restaurant) => {
          const { id, cloudinaryImageId, name, cuisines, avgRating } =
            restaurant;

          return (
            <RestaurantCard
              key={id}
              img={CLOUDINARY_IMAGE_STRING + cloudinaryImageId}
              title={name}
              cuisines={cuisines.join(", ")}
              rating={`${avgRating} stars`}
            />
          );
        })
      ) : (
        <h2>No Restaurants found</h2>
      )}
    </div>
  );
};

export default Restaurant;
