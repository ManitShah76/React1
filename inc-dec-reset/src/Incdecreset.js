import React, { Component } from 'react'

export default class Incdecreset extends Component {

    state = {a: 0};

// inc = () =>{
//     this.setState(
//        {a: this.state.a +1}
//     )
// }
// dec = () =>{
//     this.setState(
//        {a: this.state.a -1}
//     )
// }

// res = () =>{
//     this.setState(
//        {a: this.state.a = 0}
//     )
// }

handleOperation = (operation) => {
    this.setState((prevState) => ({
      a: operation === 'increment' ? prevState.a + 1 :
         operation === 'decrement' ? prevState.a - 1 : 0
    }));
  };






render() {
    return (
        <div className='App'>
            <h1>{this.state.a}</h1>
            <div>
                <button onClick={() => this.handleOperation('increment')}>Increment</button>
                <button onClick={() => this.handleOperation('decrement')}>Decrement</button>
            </div>
            <button onClick={() => this.handleOperation('reset')}>Reset</button>
        </div>
    )
}
}


