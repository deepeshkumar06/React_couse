import React, { useContext } from 'react'
import { Login } from '../App'

export default function Usecontext() {
    const LoginStatus = useContext(Login);
  return (
    <div>
        <h1>{LoginStatus}</h1>
    </div>
  )
}
