import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count,setcount] = useState(0);
    useEffect(() =>{
        setTimeout( () => {setcount(prev => prev+1)},1000)
    })
  return (
    <>
    <div><h1>Count ----{count}</h1></div>

    </>
  );
}
