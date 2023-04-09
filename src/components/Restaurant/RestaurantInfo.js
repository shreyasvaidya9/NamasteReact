import { CLOUDINARY_IMAGE_STRING } from "../../utils/constants";

import "./RestaurantInfo.css";

const RestaurantInfo = ({ restaurant }) => {
  return (
    <div className="restaurant-details">
      <div className="restaurant-image">
        <img src={CLOUDINARY_IMAGE_STRING + restaurant?.cloudinaryImageId} />
      </div>
      <div className="restaurant-info">
        <h1>{restaurant?.name}</h1>
        <h2>{restaurant?.area}</h2>
        <h3>{restaurant?.city}</h3>
        <h4>{restaurant?.avgRating} stars</h4>
        <h5>{restaurant?.costForTwoMsg}</h5>
      </div>
    </div>
  );
};

export default RestaurantInfo;
