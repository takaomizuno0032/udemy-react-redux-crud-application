import React, { Component } from "react";

class App extends Component{
  render(){
    // const greeting = "Hi!";
    
    // const dom = <input type="text" onChange={ () => {console.log("Hello")}}/>
    // return dom;
    return(
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={ () => {console.log("Hello")}}/>
      </div>
    )
  }
}

export default App;
