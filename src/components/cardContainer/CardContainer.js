import React from "react";

import { IMG_URL } from "../../utils/constents";

const CardContainer = ({ resData }) => {
  
  return (
    <div className="card hover:scale-90 ease-linear duration-500">
      <div className="res-img w-52 h-32 rounded-lg overflow-hidden">
        <img src={IMG_URL + resData.cloudinaryImageId} alt={resData.name} className="w-full h-full object-cover"/>
      </div>
      <div className="res-details">
        <h3 className="font-semibold text-sm text-[#3e4152]  ">{resData.name.length>20?resData.name.slice(0,21)+"...":resData.name}</h3>
        <p className="rating  text-xs font-semibold text-[#3e4152]  ">
          {resData.avgRating}
          <span className="duration">{" . "+resData.sla.slaString}</span>
        </p>
        <p className="text-[#3e4152] text-xs font-normal">{resData.cuisines.join(", ").length>20?resData.cuisines.join(", ").slice(0,21)+"...":resData.cuisines.join(", ")}</p>
        <p className="text-[#3e4152] text-xs font-normal">{resData.areaName}</p>
      </div>
    </div>
  );
};

export default CardContainer;
