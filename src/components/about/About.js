import AboutClass from './AboutClass'
// import AboutFun from './AboutFun';
import React from 'react';
class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("Mount parent")
    }
    render(){
        console.log("Parent render")
        return(
            <div>
               <AboutClass name="Haritha class" location="Bengaluru"/>
               
            </div>
            
        )
    }

}
export default About;