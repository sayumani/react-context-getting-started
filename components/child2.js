import React, { Component } from "react";
import NumberContext from '../context/context'

class Child2 extends Component{

  
  render(){
    return(
      <div>
        <NumberContext.Consumer>
        {(context) => <input type ='text' value={context.number} onChange={(event)=>context.change(event.target.value)}/>}
        </NumberContext.Consumer>
      </div>
    )
  }
}

export default Child2