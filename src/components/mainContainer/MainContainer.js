import React, { useEffect, useState } from "react";

import CardContainer,{addOffersToRestaurant} from "../cardContainer/CardContainer";
import ShimmerUI from "../shimmerUI/ShimmerUI";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../../utils/constents";
import useNetwork from "../../utils/useNetwork";
import NetworkStats from "../networkHook/NetworkStats";

const MainContainer = () => {

  const [resData, setResData] = useState([]);
  const [searchEle, setSearchEle] = useState("");
  const [searchList, setSearchList] = useState([]);
  
 const OfferedRestaurants=addOffersToRestaurant(CardContainer)

  //search Restaurants --start
  const searchRestaurants = (e) => {
    setSearchEle(e.target.value);
    const searchFilter = resData.filter((item) => {
     
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
        
        if(cardData?.data?.cards[1]?.card?.card?.gridElements){
          setResData(
            cardData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setSearchList(
            cardData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
        }
        else{
          setResData(
            cardData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setSearchList(
            cardData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
        }
      
       
        
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchData();

  },[]);
  const networkStats=useNetwork()
 
  if(!networkStats) return <NetworkStats/>

  return (
    
    resData?.length===0?<ShimmerUI/>:<div className="container my-3 m-auto ">
      <div className="search-section   font-['Libre Baskerville']">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search restaurants..."
          value={searchEle}
          onChange={(e) => searchRestaurants(e)}
          className="shadow-lg lg:w-6/12 md:w-8/12 sm:w-9/12 w-10/12 m-auto block border border-gray-400 rounded px-2 py-1 text-xs"
        />
      </div>
      <div className="flex items-center justify-center my-4  ">
        <button id="top-rated-res " onClick={()=>topRated()} className="border border-gray-400 rounded-md bg-white shadow-lg px-1 py-1 text-xs">
          Top Rated
        </button>
      </div>
      <div className="flex items-center justify-center my-4  ">
      {/* <input type="text" className="border border-black" value={loggedIn} onChange={(e)=>setUserName(e.target.value)}/> */}
      </div>
      <div className="sub-container flex flex-wrap gap-3 justify-center">
        
        {
        searchList?.map((item) => {
          return <Link to={"/restaurants/"+item.info.id} key={item.info.id}>
            {
            item.info.aggregatedDiscountInfoV3?<OfferedRestaurants resData={item.info}/>:

             <CardContainer  resData={item.info} />
          }
            </Link>;
        })}
      </div>
    </div>
  );
};

export default MainContainer;
