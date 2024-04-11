import React from 'react'

const LearnMap1 = () => {
    let product =[
        {name :"laptop" ,price :20000 , quantity:12},
        {name :"mobile" ,price :2000 , quantity:5},
        {name :"tv" ,price :1000, quantity:3},
        
    ]
  return (
    <div>
        {
            product.map((value,i)=>{
                return(
                    <div>
                        <p>name is {value.name}</p>
                        <p>price is {value.price}</p>
                        <p>quantity is {value.quantity}</p>
                    </div>
                )

            })
        }
    </div>
  )
}

export default LearnMap1