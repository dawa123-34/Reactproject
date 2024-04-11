import React from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const DynamicRoute = () => {
    let params = useParams()
    console.log(params.id)
    let navigate =useNavigate()
  return (
    <div>
        <button    
            onClick={()=>{
                navigate("/about")

            }}>
     
        click to go about
        </button>
        <button    
            onClick={()=>{
                navigate("/contact")

            }}>
     
        click to go contact
        </button>
    </div>
  )
}

export default DynamicRoute