import React, { useEffect, useState } from 'react'

export default function StopWatch() {
    const [count,setcount] = useState(0);
    const [start,setstart] = useState(true);

    useEffect( () => {
        let interval;
        if(start){
            interval = setInterval(() =>{setcount(prev => prev+1)},1000);
        }
        else
         clearInterval(interval);

        return ()=> {
            clearInterval(interval)
        }
    })
  return (
    <div>
        <h1>Timer----{count}</h1>
        <button onClick={() => {setstart(true)}}>Start</button>
        <button onClick={() => {setstart(false)}}>Stop</button>
        <button onClick={() => {
            setcount(0)
            setstart(false);
        }}>Reset</button>
    </div>
  )
}
