
import "./app.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import appStore from "./reduxUtils/appStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../custom.css'
const App = () => {



  return (
    <Provider store={appStore}>
       
      <div className="app overflow-hidden font-['Montserrat']">
     
        <ToastContainer />
        <Header />
      
 
        <Outlet />
      </div>
   
    </Provider>
  
  );
};

export default App;
