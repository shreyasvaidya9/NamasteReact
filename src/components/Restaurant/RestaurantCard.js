import React from "react";
import { Card } from "../UI";

const RestaurantCard = ({ img, title, cuisines, rating }) => {
  return (
    <Card>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{cuisines}</h3>
      <p>{rating}</p>
    </Card>
  );
};

export default RestaurantCard;
