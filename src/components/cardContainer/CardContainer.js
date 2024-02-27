import React from "react";

import { IMG_URL } from "../../utils/constents";

const CardContainer = ({ resData }) => {
  
  return (
    <div className="card hover:scale-90 ease-linear duration-500">
      <div className="res-img w-52 h-32 rounded-lg overflow-hidden">
        <img src={IMG_URL + resData.cloudinaryImageId} alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="res-details">
        <h3>{resData.name.length>20?resData.name.slice(0,21)+"...":resData.name}</h3>
        <p className="rating">
          {resData.avgRating}
          <span className="duration">{" . "+resData.sla.slaString}</span>
        </p>
        <p className="res-items-desc">{resData.cuisines.join(", ").length>20?resData.cuisines.join(", ").slice(0,21)+"...":resData.cuisines.join(", ")}</p>
        <p className="res-location">{resData.areaName}</p>
      </div>
    </div>
  );
};

export default CardContainer;
