import React, { Component } from "react";
import Child2 from "./child2"

class Child1 extends Component{
  render(){
    return(
      <div>
        <Child2 />
      </div>
    )
  }
}

export default Child1;