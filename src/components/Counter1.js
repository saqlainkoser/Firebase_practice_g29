import React from 'react'
import { useContext } from 'react';
import {CounterContext1} from "./../context/CounterContext1"

function Counter1() {
    const data = useContext(CounterContext1)
  return (
    <div>
      <h1>Counter : {data.count}</h1>
      <button onClick={()=>{data.setCount(data.count+1)}}>Increment</button>
      <button onClick={()=>{data.setCount(data.count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter1
