import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Menu, RestaurantInfo } from "../components/Restaurant";
import SkeletonCard from "../components/UI/Card/SkeletonCard";
import { SWIGGY_RESTAURANT_LIST_API } from "../utils/constants";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMenuItemCardDetails = (itemCards) => {
    return itemCards?.map((itemCard) => {
      const itemInfo = itemCard?.card?.info;
      const ratingDetails = itemInfo?.ratings?.aggregatedRating;
      return {
        it: itemInfo?.id,
        name: itemInfo?.name,
        price: itemInfo?.price,
        rating: ratingDetails
          ? {
              value: ratingDetails.rating ? ratingDetails.rating : null,
              count: ratingDetails.ratingCount
                ? ratingDetails.ratingCount
                : null,
            }
          : null,
        imageId: itemInfo?.imageId,
        isVeg: itemInfo?.isVeg,
        description: itemInfo?.description,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(SWIGGY_RESTAURANT_LIST_API(id));
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
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="restaurant-list">
          {Array(10)
            .fill("-")
            .map((_, index) => (
              <SkeletonCard key={index} />
            ))}
        </div>
      ) : (
        <>
          <RestaurantInfo restaurant={restaurant} />
          <Menu menu={menu} />
        </>
      )}
    </>
  );
};

export default RestaurantDetails;
