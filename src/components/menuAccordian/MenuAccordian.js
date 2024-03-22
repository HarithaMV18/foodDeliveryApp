import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

import ResMenuCards from "../resMenuCards/ResMenuCards";
const MenuAccordian = ({ title, len, data,handleMenu,showMenu }) => {

  return (
    <div className="flex-col">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={() => handleMenu()}
      >
        {/* accordian Header */}
        <h4 className="font-bold">{title + " (" + len + ")"}</h4>
        <FaAngleDown />
      </div>
      <div>
  
        {
      showMenu &&
          data?.map((menu) => {
            
            return <ResMenuCards key={menu?.card?.info?.id} menuItems={menu} />;
          })}
      </div>
    </div>
  );
};

export default MenuAccordian;
