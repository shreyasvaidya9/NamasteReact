export const filterRestaurantData = (restaurants, searchTerm) => {
  return restaurants.filter((restaurant) =>
    restaurant?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );
};

export const getMenuItemCardDetails = (itemCards) => {
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
            count: ratingDetails.ratingCount ? ratingDetails.ratingCount : null,
          }
        : null,
      imageId: itemInfo?.imageId,
      isVeg: itemInfo?.isVeg,
      description: itemInfo?.description,
    };
  });
};
