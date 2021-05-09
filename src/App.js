import React, { Component } from "react";

// class App extends Component{
//   render(){
//     // const greeting = "Hi!";
    
//     // const dom = <input type="text" onChange={ () => {console.log("Hello")}}/>
//     // return dom;
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={ () => {console.log("Hello")}}/>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    {
      name: "Taro", age: 10
    },
    {
      name: "Hanako", age: 5
    }
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>

        })
      }
    </div>

  ) 
}

const User = (props) => {
  return (
      <div>Hi, I am {props.name} and {props.age} years old.</div>
    )
}

export default App;
