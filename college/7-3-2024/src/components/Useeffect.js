import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [count,setcount] = useState(0);
    const [name,setname] = useState('');
    useEffect(
        () => {
            console.log("counting");
        },[]);
  return (
    <div>
        <h1>Welcome</h1>
        <h2>Count ---{count}</h2>
        <input type="text" value={name} onChange={(e) => {setname(e.target.value)}}/>
        <button onClick={() => {setcount(prev => prev+1)}}>Inc</button>
    </div>
  )
}
