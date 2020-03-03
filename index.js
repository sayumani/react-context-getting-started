import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

import Child1 from "./components/child1";
import NumberContext from './context/context'



class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      change : (number) =>{
        this.setState({
          number : Number(number)
        })
      }
    };
  }

  increment(){
    this.setState({
      number : this.state.number + 1
    })
  }

  render() {
    return (
      <NumberContext.Provider value={this.state}>
        <div>
          <h1>React context sample </h1>
          <button onClick={(evt) => this.increment()}>Increment From  parent Componet</button>
          <Child1 />
        </div>
      </NumberContext.Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
