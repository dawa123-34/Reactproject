import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import ProductCrate from './ProductCrate'
import Product from './Product'
import DynamicRoute from './DynamicRoute'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/product/create" element={<ProductCrate></ProductCrate>}></Route>

            <Route path="/product/:id" element={<DynamicRoute></DynamicRoute>}> </Route>
        </Routes>

    </div>

  )
}

export default MyRoutes