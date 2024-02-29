import React, { useEffect,useState } from "react";
import { CARD_URL } from "./constents";
const useRestaurantMenuGetData = (resId) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(CARD_URL+resId);

        const json = await response.json();
    
        setMenuData(json.data.cards)
       
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  },[]);
 
  return menuData;
};

export default useRestaurantMenuGetData;
