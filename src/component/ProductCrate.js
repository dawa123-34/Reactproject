import React, { useState } from 'react'

const ProductCrate = () => {
  let [name,setName]=useState("")
  let [price,setPrice] =useState("")
  let [country,setCountry] =useState("nepal")
  let [isInShop,setIsInShop] =useState(false)
  return (
    <div>
      
      <form onSubmit={(e)=>{e.preventDefault() // e.preventDefult it is done to stop defult behaviour
      let data={
        name:name,
        price:price,
        isInShop: isInShop,
        country: country      }
      console.log(data)
    }
      
      }>
        <div>
        <label htmlFor='a'>Name</label>
        <input id="a" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
        <div>
          < label htmlFor="price">price</label>
          <input id="price" type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
        </div>
        <div>
          < label htmlFor="isInShop">isInShop</label>
          <input id="isInShop" type="checkbox" value={isInShop} onChange={(e)=>{setIsInShop(e.target.checked)}}></input>
        </div>
        <div>
          <label>country</label>
          <select >

          value={country} onChange={(e)=>{
            setCountry(e.target.value)
          }}
            
          <option value="nepal">Nepal</option>
          <option value="china">China</option>
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
          </select>
        </div>

        <button type="submit">send</button>

      </form>
    </div>
  )
}

export default ProductCrate