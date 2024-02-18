import React, { useEffect, useState } from "react";
import "./mainContainer.css";
import CardContainer from "../cardContainer/CardContainer";

const MainContainer = () => {
  const [resData, setResData] = useState([]);
  const [searchEle,setSearchEle]=useState("");
  const searchRestaurants=(e)=>{
    setSearchEle(e.target.value)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const cardData = await response.json();
      setResData(
        cardData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="search-section">
      <input type="text" name="search" id="search" placeholder="search restaurants..." value={searchEle}
      onChange={(e)=>searchRestaurants(e)}/>
      </div>
      <div className="sub-container">
        {resData.map((item) => {
          return <CardContainer key={item.info.id} resData={item.info} />;
        })}
      </div>
    </div>
  );
};

export default MainContainer;
