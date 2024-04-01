import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

import ResMenuCards from "../resMenuCards/ResMenuCards";
import { useSelector } from "react-redux";
const MenuAccordian = ({ title, len, data }) => {
  // ,handleMenu,showMenu
const [showMenuToggle,setShowMenuToggle]=useState(false)
const itemsInCart=useSelector((store)=>store?.cart?.items)

const handleMenu=()=>{
  setShowMenuToggle(!showMenuToggle)
}
  return (
  len>0 &&  <div className="flex-col">
      <div 
        className="flex justify-between items-center cursor-pointer "
        onClick={() => handleMenu()}
      >
        {/* accordian Header */}
        <h4 className="font-bold lg:text-lg md:text-md sm:text-sm text-xs">{title + " (" + len + ")"}</h4>
        <FaAngleDown />
      </div>
      <div>
  
        {
      showMenuToggle  &&
          data?.map((menu) => {
          
            return <ResMenuCards key={menu?.card?.info?.id} menuItems={menu} />;
          })}
      </div>
    </div>
  );
};

export default MenuAccordian;
