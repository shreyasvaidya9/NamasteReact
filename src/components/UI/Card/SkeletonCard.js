import React from "react";

import "./SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <div className="image-placeholder"></div>
      </div>
      <div className="card-details">
        <h2 className="title-placeholder"></h2>
        <h3 className="cuisines-placeholder"></h3>
        <p className="rating-placeholder"></p>
      </div>
    </div>
  );
};

export default SkeletonCard;
