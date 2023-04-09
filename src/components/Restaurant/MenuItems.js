import { CLOUDINARY_IMAGE_STRING } from "../../utils/constants";
import "./MenuItems.css";

const MenuItems = ({ itemCards }) => {
  return (
    <div className="menu-items">
      {itemCards?.map((menuItem) => {
        const { name, description, imageId, isVeg, price, rating } = menuItem;
        return (
          <div className="menu-item">
            <div className="menu-item-image">
              <img src={CLOUDINARY_IMAGE_STRING + imageId} />
            </div>
            <div className="menu-item-details">
              <h5>{name}</h5>
              <p>{description}</p>
              <p>{isVeg ? "Pure Veg" : null}</p>
              <p>Price: {price / 100}</p>
              {rating && rating.value && rating?.count ? (
                <ul>
                  <li>Rating: {rating.value}</li>
                  <li>{rating?.count}</li>
                </ul>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
