import React, { useState } from 'react'

export default function () {
    const [usd,setusd] = useState();
    const [inr,setinr] = useState();
    function handleusd(e){
        setusd(e.target.value);
        setinr(e.target.value*82.90);
    }
    function handleinr(e) {
      setinr(e.target.value);
      setusd(e.target.value/82.90);
    }
  return (
    <div>
        <form action="" >
          <label htmlFor="">USD</label>
        <input type="text" value={usd} onChange={handleusd}/>
        <br />
        <label htmlFor="">INR</label>
        <input type="text" value={inr} onChange={handleinr}/>
        
        </form>
    </div>
  )
}
