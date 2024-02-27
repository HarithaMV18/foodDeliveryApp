import React, { useEffect, useState } from "react";

import CardContainer from "../cardContainer/CardContainer";
import ShimmerUI from "../shimmerUI/ShimmerUI";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../../utils/constents";
import useNetwork from "../../utils/useNetwork";
import NetworkStats from "../networkHook/NetworkStats";

const MainContainer = () => {
  const [resData, setResData] = useState([]);
  const [searchEle, setSearchEle] = useState("");
  const [searchList, setSearchList] = useState([]);
 
  //search Restaurants --start
  const searchRestaurants = (e) => {
    setSearchEle(e.target.value);
    const searchFilter = resData.filter((item) => {
      console.log(item.info.name)
      return item.info.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setSearchList(searchFilter);
  };
   //search Restaurants -->end
   //Top rated restaurants -->start
  const topRated=()=>{
    const topRestaurants=searchList.filter((item)=>{
      return item.info.avgRating>=4.5
    })
    setSearchList(topRestaurants)
  }
//Top rated restaurants -->end
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          MAIN_URL
        );
      
        const cardData = await response.json();
console.log(cardData.data)
        setResData(
          cardData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setSearchList(
          cardData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchData();

  },[]);
  const networkStats=useNetwork()
  if(!networkStats) return <NetworkStats/>
  return (
    resData.length===0?<ShimmerUI/>:<div className="container">
      <div className="search-section">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search restaurants..."
          value={searchEle}
          onChange={(e) => searchRestaurants(e)}
        />
      </div>
      <div className="top-rated">
        <button id="top-rated-res" onClick={()=>topRated()}>
          Top Rated
        </button>
      </div>
      <div className="sub-container">
        {searchList.map((item) => {
          return <Link to={"/restaurants/"+item.info.id} key={item.info.id}><CardContainer  resData={item.info} /></Link>;
        })}
      </div>
    </div>
  );
};

export default MainContainer;
