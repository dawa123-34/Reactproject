import { useState } from "react"
import React  from 'react'

const LearnUseState1 = () => {
    // let age = 30
    let[age,setAge]= useState(30)
  return (
    <div>
      
      <p> my age is {age}</p>
      <br></br>
      <button 
    onClick={()=>{
          setAge(31)
        }}>
          click me
      </button>
    
    
    </div>
  )
}

export default LearnUseState1