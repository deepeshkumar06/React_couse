import React from 'react'


export const Content = () => {
    function changename(){
        const names = ["Welcome","Greetings"];
        const int = Math.floor(Math.random()*2);
        return names[int];
      }
  return (
    <div>{changename()} to my website</div>
  )
}
