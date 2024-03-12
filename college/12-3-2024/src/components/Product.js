import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        Product page
        <nav>
        <Link to={'mostview'}>Most Viewed</Link>
        <Link to={'new'}>New</Link>
        </nav>
        <Outlet />
    </div>
  );
}
