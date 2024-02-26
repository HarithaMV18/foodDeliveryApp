
import ShimmerUI from "../shimmerUI/ShimmerUI";
import "./restaurantMenu.css";
import CategoryCard from "../categoryCard/CategoryCard";
import { useParams } from "react-router-dom";
import useRestaurantMenuGetData from "../../utils/useRestaurantMenuGetData";


const RestaurantMenu = () => {
  
  const {resId}=useParams()
const menuData=useRestaurantMenuGetData(resId)

  if (menuData.length === 0) {
    return <ShimmerUI />;
  }
  const { name, cuisines, areaName } = menuData[2]?.card?.card?.info;
  const categoryCards = menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="res-menu">
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <CategoryCard categoryCards={categoryCards} />
    </div>
  );
};
export default RestaurantMenu;
