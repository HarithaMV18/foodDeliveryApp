import React from "react";
import UserContext from "../../utils/UserContext";
class AboutClass extends React.Component{
 render(){
    return <div>
      class Based component
      <UserContext.Consumer>
         {
            ({loggedIn})=><h1>{loggedIn}</h1>
         }
      </UserContext.Consumer>
      </div>
 }
}
export default AboutClass;