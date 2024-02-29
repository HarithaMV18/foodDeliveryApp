
import ShimmerUI from "../shimmerUI/ShimmerUI";

import CategoryCard from "../categoryCard/CategoryCard";
import { useParams } from "react-router-dom";
import useRestaurantMenuGetData from "../../utils/useRestaurantMenuGetData";


const RestaurantMenu = () => {
  
  const {resId}=useParams()
const menuData=useRestaurantMenuGetData(resId)

  if (menuData.length === 0) {
    return <ShimmerUI />;
  }
 
  const { name, cuisines, areaName } = menuData[0]?.card?.card?.info;
  const categoryCards = menuData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="res-menu w-3/5 m-auto">
      <h3 className="font-bold">{name}</h3>
      <p className="text-xs text-[#7e808c]">{cuisines.join(", ")}</p>
      <p className="text-xs text-[#7e808c]">{areaName}</p>
      <CategoryCard categoryCards={categoryCards} />
    </div>
  );
};
export default RestaurantMenu;
