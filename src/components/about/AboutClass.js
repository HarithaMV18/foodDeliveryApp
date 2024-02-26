import React from "react";
class AboutClass extends React.Component{
    constructor(props){
super(props)
this.state={
    count1:0,
    count2:1
}
console.log("child constructor")
    }
    componentDidMount(){
        console.log("Child Mount")
    }
    render(){
        console.log(" child render")
        const {name,location}=this.props
        const {count1,count2}=this.state
        return(
            <div>
                <h1>About Class</h1>
                <p>count:{count1}</p>
                <button onClick={()=>this.setState({
                    count1:this.state.count1+1,
                    count2:this.state.count2+2
                })
                 
                }>Increment</button>
                <p>count:{count2}</p>
                
            <p>{name}</p>
            <p>{location}</p>
            </div>
            
        )
    }

}
export default AboutClass;