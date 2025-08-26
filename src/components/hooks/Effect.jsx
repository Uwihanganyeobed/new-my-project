import React, { useEffect, useState } from 'react'

export default function Effect() {
  const [seconds, setSeconds ]= useState(0);

  useEffect(()=>{
      /*
      useEffect hook in React allows you to perform side effects in
        your components. Side effects can include tasks like
        fetching data, directly updating the DOM, and setting up timers
      */
     const interval = setInterval(()=>{
      setSeconds((prev)=>prev+1)
     },[3000])
     return ()=>clearInterval(interval)

  },[])
  return (
    <div>Time: {seconds}</div>
  )
}
