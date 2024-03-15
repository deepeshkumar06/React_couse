import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './style.css'

export default function Nav() {
  return (
    <div className='Navbar'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/service'}>Service</NavLink>
        <NavLink to={'/product'}>Products</NavLink>
        <NavLink to={'/user'} >Users</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/profile'} >Profile </NavLink>
    </div>
  )
}
