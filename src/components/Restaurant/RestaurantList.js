import React, { useMemo, memo, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SkeletonCard from "../UI/Card/SkeletonCard";

import "./RestaurantList.css";

import { CLOUDINARY_IMAGE_STRING, SWIGGY_API } from "../../utils/constants";

const RestaurantList = ({ searchTerm }) => {
  const [loading, setLoading] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(SWIGGY_API);
      const value = await response.json();

      const seeAllRestaurantData = value?.data?.cards?.find(
        (cardList) => cardList.cardType === "seeAllRestaurants"
      )?.data?.data?.cards;

      setRestaurantData(seeAllRestaurantData);
      setLoading(false);
    };
    fetchData();
  }, []);

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
    return justRestaurantData?.filter((restaurant) =>
      restaurant?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
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