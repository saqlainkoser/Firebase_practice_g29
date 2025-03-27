import React, { useState } from 'react'
import { createContext } from 'react'

export const CounterContext = createContext(null)

function  CounterProvider(props) {

    const [count,setCount] = useState(3)

  return (
    <CounterContext.Provider value={{count,setCount}}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
