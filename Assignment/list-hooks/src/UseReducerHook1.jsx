import React, { useReducer } from 'react'

function UseReducerHook1() {

    const val = {n:0};

    const reducerFun = (state,action)=>{
         switch (action.type) {
            case "inc":
                return {n : state.n+1}

                case "dec":
                return {n : state.n-1}
        
             default:
                return state;
         }
    }

    const [state,Dispatch] = useReducer(reducerFun,val)
  return (
    <div>
      <button onClick={()=>{Dispatch({type:"inc"})}}>+</button>
      {state.n}
      <button onClick={()=>{Dispatch({type:"dec"})}}>-</button>
    </div>
  )
}

export default UseReducerHook1
