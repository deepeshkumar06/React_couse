import React from 'react'

export default function Condition() {
  const islogged = true;
//   if(islogged)
//   return <h1>Welcome User</h1>;
//   else
//   return <h1>Welcome Guest</h1>;

    // let login;
    // if(islogged)
    // login = <h1>Welcome User</h1>
    // else
    // login = <h1> Welcome Guest </h1>
    // return login;

    // return islogged?(
    //     <h1>Welcome User</h1>
    // ):(
    //     <h1> Welcome Guest </h1>
    // );

    return ( islogged && <h1>Welcome User</h1> );
}
