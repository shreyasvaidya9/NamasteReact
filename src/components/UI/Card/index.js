import React from "react";

import "./card.css";

const Card = ({ onClick = () => {}, children }) => {
  return (
    <div onClick={onClick} className="card">
      {children}
    </div>
  );
};

export default Card;
