import React, { useState } from 'react'
import { createContext } from 'react'

//creating an instace of context api
export const CounterContext1 = createContext(null)

function ContextProvider(props) {
    const [count,setCount] = useState(6)

  return (
    <CounterContext1.Provider value={{count,setCount}}>
      {props.children}
    </CounterContext1.Provider>
  )
}

export default ContextProvider
