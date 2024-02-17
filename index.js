import React from "react";
import ReactDOM from "react-dom/client";
import App from './src/App'
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
