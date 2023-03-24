import React, { useMemo, memo, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SkeletonCard from "../UI/Card/SkeletonCard";

import "./Restaurant.css";
import { CLOUDINARY_IMAGE_STRING } from "./restaurant-dummy-data";

import { SWIGGY_API } from "../../utils/constants";

const Restaurant = ({ searchTerm }) => {
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

  const restaurantList = useMemo(() => {
    const justRestaurantData = restaurantData?.map((item) => item?.data);

    // Return the complete restaurants list if no search term is present
    if (!searchTerm) {
      return justRestaurantData;
    }

    // Return the restaurants filtered with the search term
    return justRestaurantData?.filter((restaurant) =>
      restaurant?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
  }, [searchTerm, restaurantData]);

  return (
    <div className="restaurant-list">
      {loading ? (
        <>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <SkeletonCard key={num} />
          ))}
        </>
      ) : restaurantList?.length > 0 ? (
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

export default memo(Restaurant);
