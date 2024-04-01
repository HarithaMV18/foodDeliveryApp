import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../../utils/constents";
import { addItem, removeItem, totalAdd, totalDeduct } from "../../reduxUtils/cartSlice";

import { useState } from "react";

const ResMenuCards = ({ menuItems }) => {
  const addedItems = useSelector((store) => store?.cart?.items);
  const quantity = {};
  addedItems.map(({ ...items }) => {
    return (quantity[items.card.info.id] = items.itemCount);
  });

  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  const [textMore, setTextMore] = useState(true);
  const toggleText = () => {
    setTextMore(false);
  };
  const dispatch = useDispatch();

  const addCartItems = (menuItems) => {
    dispatch(addItem(menuItems));

    dispatch(
      totalAdd(
        (menuItems?.card?.info?.price || menuItems?.card?.info?.defaultPrice) /
          100
      )
    );
  };
  const removeCartItems=()=>{
    
dispatch(removeItem(menuItems.card.info.id))
dispatch(
  totalDeduct(
    (menuItems?.card?.info?.price || menuItems?.card?.info?.defaultPrice) /
      100
  )
);
  }

  return (
    menuItems && (
      <div className="  menu-card flex gap-4  items-center justify-between border-b-2 border-gray-300 py-4 last:border-b-0">
        <div className="card-details basis-4/5">
          <h5 className="text-[#3e4152] text-xs font-semibold">
            {menuItems.card.info.name}
          </h5>
          <span className="text-xs font-semibold text-[#3e4152]">
            {"₹" +
              (menuItems.card.info.price || menuItems.card.info.defaultPrice) /
                100}
          </span>
          <p className="max-[840px]:text-[0.5rem] text-[0.6rem] text-[rgba(40,44,63,.45)] font-medium">
            {menuItems?.card?.info?.description?.length > 100 && textMore
              ? menuItems.card.info.description.slice(0, 100) + "..."
              : menuItems.card.info.description}
            {textMore && menuItems?.card?.info?.description?.length > 100 && (
              <span
                className="cursor-pointer font-bold text-gray-500"
                onClick={toggleText}
              >
                Read More
              </span>
            )}
          </p>
        </div>
        <div className="card-img w-28 rounded-md overflow-hidden h-[130px] relative">
          <img
            src={IMG_URL + menuItems.card.info.imageId}
            alt={menuItems.card.info.name}
            className="w-full object-cover h-full"
          />
          <div className="absolute bottom-0 w-full ">
            {quantity[menuItems.card.info.id] ? (
              <div className="uppercase w-[4rem] text-green-700 font-semibold text-[12px]  bg-white   border border-gray-400 m-auto block hover:shadow-black">
                <span className="px-2 cursor-pointer" onClick={()=>removeCartItems()}>-</span>
                <span className="px-2">{quantity[menuItems.card.info.id]}</span>
                <span
                  className="px-2 cursor-pointer"
                  onClick={() => addCartItems(menuItems)}
                >
                  +
                </span>
              </div>
            ) : (
              <button
                onClick={() => addCartItems(menuItems)}
                className="uppercase w-15 text-green-700 font-semibold text-[12px]  bg-white  px-5 border border-gray-400 m-auto block hover:shadow-black"
              >
                Add{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};
export default ResMenuCards;

// export const countTotal = (ResMenuCards) => {
//   return (menuItems) => {
//     return <ResMenuCards {...menuItems} />;
//   };
// };
