import { useState } from "react";
import ResMenuCards from "../resMenuCards/ResMenuCards";
import { FaAngleDown } from "react-icons/fa6";
const CategoryCard = ({ categoryCards }) => {
  const [collapseMenu, setCollapseMenu] = useState(false);
  const menuCollapse = (e) => {
    console.log(e.target.value);
    setCollapseMenu((preValue) => !preValue);
  };
  return categoryCards.map((item, index) => {
    return (
      <div
        className="categories-list border-b-8 border-gray-200 py-2 "
        key={index}
        onClick={(e) => menuCollapse(e)}
      >
        <div className="flex justify-between items-center">
          <h4 className="font-bold">{item.card.card.title+" ("+")"}</h4>

          <FaAngleDown />
        </div>

        <div>
          {item?.card?.card?.categories
            ? item?.card?.card?.categories?.map((cards) =>
                cards?.itemCards?.map((menu) => {
                  return (
                    <ResMenuCards key={menu.card.info.id} menuItems={menu} />
                  );
                })
              )
            : item?.card?.card?.itemCards?.map((menu) => {
                return (
                  <ResMenuCards key={menu.card.info.id} menuItems={menu} />
                );
              })}
        </div>
      </div>
    );
  });
};
export default CategoryCard;
