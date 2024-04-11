import React from 'react'
import { NavLink } from 'react-router-dom'

const MyNavLink = () => {
  return (
    <div>
        <NavLink to="/" style={{marginRight:"20PX"}}>HOME</NavLink>
        <NavLink to="/about" style={{marginRight:"20PX",color:"green"}}>ABOUT</NavLink>
        <NavLink to="/contact" style={{marginRight:"20PX"}}>CONTACT</NavLink>
        <NavLink to="/product" style={{marginRight:"20PX"}}>PRODUCT</NavLink>
        <NavLink to="/product/create" style={{marginRight:"20PX"}}>create product</NavLink>
      

    </div>
  )
}

export default MyNavLink