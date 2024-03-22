import React from "react";
import ReactDOM from "react-dom/client";
import App from './src/App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/about/About";
import Error from "./src/components/error/Error";
import Contact from "./src/components/contact/Contact";
import MainContainer from "./src/components/mainContainer/MainContainer";
import RestaurantMenu from "./src/components/restaurantMenu/RestaurantMenu";
import CartPage from "./src/components/cartPage/CartPage";
// const ele = React.createElement(
//   "div",
//   { className: "header" },
//   React.createElement("h1", {}, "Hello second heading"),
//   React.createElement("div", { id: "first-div", className: "sub-container" }, [
//     React.createElement("i", {}, "Hi italic"),
//     React.createElement("p", {}, "Hi second div"),
//   ])
// );
// console.log(ele);
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element: <MainContainer/>,
                
            },   
        {
            path:"/about",
            element:<About/>,
            
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/cart",
            element:<CartPage/>
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        }],
        errorElement:<Error/>
        
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// root.render(ele)
