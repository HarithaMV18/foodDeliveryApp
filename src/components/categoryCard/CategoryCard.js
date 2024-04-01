import { useState } from "react";
import MenuAccordian from "../menuAccordian/MenuAccordian";

const CategoryCard = ({ categoryCards }) => {
  //lifting the state up
  const [menuCollapse, setMenuCollapse] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [booleanFalse, setBooleanFalse] = useState(false);
  return categoryCards?.map((item, index) => {
 
    return (
      (item?.card?.card?.itemCards || item?.card?.card?.categories) &&  <div
        className="categories-list border-b-8 border-gray-200 py-2 "
        key={index}
      >
        {
        item?.card?.card?.itemCards ? (
          <MenuAccordian
            title={item.card.card.title}
            len={item?.card?.card?.itemCards?.length}
            data={item?.card?.card?.itemCards}         
          />
        ) : (
          <h4 className="font-bold">{item.card.card.title}</h4>
        )}
        <div>
          {item?.card?.card?.categories
            ? //sub categories section
              item?.card?.card?.categories?.map((cards, index) => {
                return (
                  <div
                    className="text-xs border-b-2 border-gray-200 py-2  last:border-b-0"
                    key={cards.title}
                  >
                    <MenuAccordian
                      title={cards.title}
                      len={cards?.itemCards?.length}
                      data={cards?.itemCards}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    );
  });
};
export default CategoryCard;
