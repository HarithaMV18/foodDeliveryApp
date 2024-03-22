import React, { useContext, useState, useEffect } from "react";
import "./app.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./reduxUtils/appStore";

const App = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName("Haritha VijayaKumar");
  }, []);


  return (
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedIn:userName,setUserName}}>
      <div className="app overflow-hidden font-['Montserrat']">
        {/* <UserContext.Provider value={{loggedIn:"Sachin"}}> */}
        <Header />
      
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  
  );
};

export default App;
