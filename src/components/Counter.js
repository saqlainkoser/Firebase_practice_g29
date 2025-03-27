import React, { use } from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContex'

function Counter() {
    const ConterData = useContext(CounterContext); 
    console.log(ConterData)   
  return (
    <div>
      <h1>Counter : {ConterData.count}</h1>
      <button onClick={()=>{ConterData.setCount(ConterData.count+1)}}>Increment</button>
      <button onClick={()=>{ConterData.setCount(ConterData.count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter
