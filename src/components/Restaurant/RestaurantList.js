import React, { useMemo, memo, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SkeletonCard from "../UI/Card/SkeletonCard";

import "./RestaurantList.css";

import { CLOUDINARY_IMAGE_STRING, SWIGGY_API } from "../../utils/constants";
import { filterRestaurantData } from "../../utils/helper";
import { useRestaurantList } from "../../hooks";

const RestaurantList = ({ searchTerm }) => {
  const { restaurantData, loading, error } = useRestaurantList();

  /**
   * restaurantList: Used to filter the restaurantData and returns one of the below values:
   *
   *  * The complete restaurants list if no search term is present.
   *  * If search term is present then it returns the restaurants filtered with the search term
   */
  const restaurantList = useMemo(() => {
    const justRestaurantData = restaurantData?.map((item) => item?.data);

    if (!searchTerm) {
      return justRestaurantData;
    }

    // Return the restaurants filtered with the search term
    return filterRestaurantData(justRestaurantData, searchTerm);
  }, [searchTerm, restaurantData]);

  if (loading) {
    return (
      <div className="restaurant-list">
        {Array(10)
          .fill("-")
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    );
  }

  return (
    <div className="restaurant-list">
      {restaurantList?.length > 0 ? (
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
              id={id}
            />
          );
        })
      ) : (
        <h2>No Restaurants found</h2>
      )}
    </div>
  );
};

export default memo(RestaurantList);
