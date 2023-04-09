import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../UI";

const RestaurantCard = ({ img, title, cuisines, rating, id }) => {
  const navigate = useNavigate();

  const openRestaurant = () => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <Card onClick={openRestaurant}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{cuisines}</h3>
      <p>{rating}</p>
    </Card>
  );
};

export default RestaurantCard;
