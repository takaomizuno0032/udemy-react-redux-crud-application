import React, { Component } from "react";
// import PropTypes from 'prop-types';

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
  return(
   <Counter></Counter>
  ) 
}

// const User = (props) => {
//   return (
//       <div>Hi, I am {props.name} and {props.age} years old.</div>
//     )
// }
class Counter extends Component {
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }
  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton = () => {
    this.setState({count: this.state.count -1 })
  }

  render() {
  
    console.log(this.state);
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>

      </React.Fragment>
    )
  }
}


// User.PropTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number
// }

export default App;
