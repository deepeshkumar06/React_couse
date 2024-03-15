 import React, { useState } from 'react'
 
 export default function Calculator() {
  const [cal,setcal] = useState("");
  const handlecal = () => {
    setcal(eval(cal));
  };
   return (
     <div>
      <center>
      <input type="text" value={cal}/><br />
        <button onClick={() => {setcal(prev => prev+"1")}}>1</button>
        <button onClick={() => {setcal(prev => prev+"2")}}>2</button>
        <button onClick={() => {setcal(prev => prev+"3")}}>3</button>
        <button onClick={() => {setcal(prev => prev+"+")}}>+</button>
        <button onClick={() => {setcal(prev => prev+"-")}}>-</button>
        <button onClick={handlecal}>=</button>
        </center>
     </div>
   )
 }
 