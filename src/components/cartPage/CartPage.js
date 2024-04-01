import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ResMenuCards from "../resMenuCards/ResMenuCards";
import { clearCart } from "../../reduxUtils/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const totalItemsAdded = useSelector((store) => store?.cart?.totalItems);
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
   
  };
  return (
    <div className="w-full">
      <div className=" lg:w-3/5 md:w-4/5 sm:w-5/6 w-[90%] m-auto">
        <h1 className="text-center font-semibold">Your Cart</h1>
        <button
          onClick={clearCartItems}
          className="border border-gray-500 rounded-sm px-1 text-sm block"
        >
          Clear Cart
        </button>
        {cartItems.length == 0
          ? "No Items in the cart"
          : cartItems.map((menu) => {
           
              return menu.itemCount!==0 &&<ResMenuCards key={menu.card.info.id} menuItems={menu} />;
            })}
           { totalItemsAdded > 0 && <h1>Total: {totalItemsAdded}</h1> }
      </div>
    </div>
  );
};

export default CartPage;
