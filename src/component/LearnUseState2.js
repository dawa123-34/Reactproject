import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [counter, setCounter] =useState(0)
  return (
    <div>
        counter is {counter}
        <br></br>
        <button onClick={()=>{setCounter(counter+1)}}>
            increment
        </button>
        <button onClick={()=>{setCounter(counter-1)}}>
            decrement
        </button>
    </div>
  )
}

export default LearnUseState2