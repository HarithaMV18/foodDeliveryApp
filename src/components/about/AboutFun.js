import React from 'react'
import {useState} from 'react'
const AboutFun = (props) => {
    const {name,location}=props
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(1)
  return (
    <div>
      <h1>About function</h1>
      <p>count:{count1}</p>
      <p>count:{count2}</p>
      <p>{name}</p>
      <p>{location}</p>
    </div>
  )
}

export default AboutFun
