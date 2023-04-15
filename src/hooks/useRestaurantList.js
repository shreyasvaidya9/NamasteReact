import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";

const useRestaurantList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(SWIGGY_API);
        const value = await response.json();

        const seeAllRestaurantData = value?.data?.cards?.find(
          (cardList) => cardList.cardType === "seeAllRestaurants"
        )?.data?.data?.cards;

        setRestaurantData(seeAllRestaurantData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        setRestaurantData([]);
      }
    };
    fetchData();
  }, []);

  return { restaurantData, error, loading };
};

export default useRestaurantList;
