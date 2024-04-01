import React, {  useState } from "react";
import logo from "../../images/Fast-Food-icon.png";

import { RiCloseLine, RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useNetwork from "../../utils/useNetwork";
import { useSelector } from "react-redux";

const Header = () => {
  const networkStats = useNetwork();
  const [showSideMenu,setShowSideMenu]=useState(false)

  const cartItemscount = useSelector((store) => store.cart.totalCartItems);

  return (
    <div className="header shadow-lg px-2 font-semibold text-sm">
      <nav className="flex items-center justify-between">
        <img src={logo} alt="logo" className="w-20" />
        {!showSideMenu && <RiMenu2Fill className="lg:hidden block cursor-pointer font-bold text-lg" onClick={()=>setShowSideMenu(!showSideMenu)}/>}
      
      {showSideMenu &&  <div className="nav-items basis-5/12 lg:hidden block fixed top-5 right-0 z-[100] h-fit  py-4 px-2 bg-white shadow-md">
      <RiCloseLine className="w-full  pl-24  cursor-pointer" onClick={()=>setShowSideMenu(!showSideMenu)}/>
          <ul className="flex items-center justify-around flex-col gap-3">
            <li className="hover:border-b-slate-700 hover:border-b-2 mb-2 ">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:border-b-slate-700 hover:border-b-2 mb-2">
              <Link to="/cart">cart-{cartItemscount} items</Link>
            </li>
            <li className="  mb-2">online status:{networkStats ? "🟢" : "🔴"}</li>
          </ul>
       
          
        </div>}
        <div className="nav-items basis-5/12 lg:block hidden ">
          <ul className="flex items-center justify-around ">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/cart">cart-{cartItemscount} items</Link>
            </li>
            <li>online status:{networkStats ? "🟢" : "🔴"}</li>
          </ul>
       
          
        </div>
        
      </nav>
    </div>
  );
};

export default Header;
