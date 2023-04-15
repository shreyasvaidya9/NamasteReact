import { useState, useEffect } from "react";

import { SWIGGY_RESTAURANT_LIST_API } from "../utils/constants";
import { getMenuItemCardDetails } from "../utils/helper";

const useRestaurantDetails = (restaurantId) => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(SWIGGY_RESTAURANT_LIST_API(restaurantId));
        const data = await response.json();
        setRestaurant(data?.data?.cards?.[0]?.card?.card?.info);

        const menuData =
          data?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.map((item) => {
              const menuItemDetails = item?.card?.card;
              if (!!menuItemDetails?.title) {
                const itemCards = getMenuItemCardDetails(
                  menuItemDetails?.itemCards
                );
                const categories = menuItemDetails?.categories?.map(
                  (category) => {
                    return {
                      title: category?.title,
                      itemCards: category?.itemCards
                        ? getMenuItemCardDetails(category?.itemCards)
                        : null,
                    };
                  }
                );
                return {
                  title: menuItemDetails?.title,
                  itemCards: menuItemDetails?.itemCards ? itemCards : null,
                  categories: menuItemDetails?.categories ? categories : null,
                };
              } else {
                return null;
              }
            })
            .filter((item) => item);
        setMenu(menuData);
        setLoading(false);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        setRestaurant({});
        setMenu([]);
      }
    };
    fetchData();
  }, []);

  return {
    data: { restaurant, menu },
    loading,
    error,
  };
};

export default useRestaurantDetails;
