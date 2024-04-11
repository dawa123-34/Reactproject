//import Address from "./component/Address"
// import LearnMap1 from "./component/LearnMap1"
// import LearnMap2 from "./component/LearnMap2"
// import LearnUseState1 from "./component/LearnUseState1"
// import LearnUseState2 from "./component/LearnUseState2"
import Form from "./component/Form"
import MyNavLink from "./component/MyNavLink"
import MyRoutes from "./component/MyRoutes"

export let App=({name,address,age,isMarried})=>{

  console.log(name)
  console.log(address)
  console.log(age)
  console.log(isMarried)
  return(
    <div>
      {/* <img src="./favicon.ico" alt="eslint-disable-next-line"></img>
      name is {name}
      <br></br>
      address is {address}
      <br></br>
      age is {age}
      <br></br>
      isMarried{isMarried.toString()}
      <br></br>
      isMarried is {isMarried === true ? "yes" :"no"}
<Address city="bbbrr" exactLocation="namp"></Address>
<LearnUseState1></LearnUseState1>
<LearnUseState2></LearnUseState2>
<LearnMap1></LearnMap1>
<LearnMap2></LearnMap2> */}

<MyNavLink></MyNavLink>
<MyRoutes></MyRoutes>
<Form></Form>



    </div>
  )
  

}