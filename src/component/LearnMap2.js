import React from 'react'

const LearnMap2 = () => {
    let users=[
        {
          name:"nimesh",
          address:"morang",
          email:"nimesh34@gmail.com",
          password:"nim23@esh",
    },
    {
        name:"john",
        address:"jhapa",
        email:"joh34@gmail.com",
        password:"jon23@eh", 
    },
]
  return (
    <div>
        {
        users.map((value,i)=>{
            return(
                <div>
                    <p>name is :{value.name}</p>
                    <p>address is: {value.address}</p>
                    <p>email is :{value.email}</p>
                    <p>password is :{value.password}</p>
                </div>

            )

        })}
    </div>
  )
}

export default LearnMap2