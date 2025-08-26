import React, { useEffect,  } from 'react'
import { useState } from 'react'
export default function State() {
const [state,setState]= useState(0);

const increment=()=>{
  setState(state+1);
}
const decrement=()=>{
  setState(state-1)
}
const reset=()=>{
  setState(0)
}

useEffect(()=>{
  console.log('dom is updated')
},[state])

  return (
    <div className='flex flex-col gap-5 items-center justify-between'>
      <p>My Current state now is {state}</p>
      {state>=18 ? <p>You can vote</p>: <p>You cannot vote</p>}
      <button className=' bg-green-400' onClick={increment}>Increment</button>
      <button className=' bg-red-400' onClick={decrement}>Decrement</button>
      <button className=' bg-orange-400' onClick={reset}>Reset</button>
    </div>
  )
}







/*
snake_case varibales declarations
camel_Case  properties of html elemnts
Pascal_Case  Naming Components
*/
