import { useParams } from "react-router-dom";
import { Menu, RestaurantInfo } from "../components/Restaurant";
import SkeletonCard from "../components/UI/Card/SkeletonCard";
import { useRestaurantDetails } from "../hooks";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useRestaurantDetails(id);

  const { restaurant, menu } = data;

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
      ) : error ? (
        <h1>Something Went Wrong!</h1>
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
