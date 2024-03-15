import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

export default function User() {
    const {userid}  = useParams()
  return (
    <div>
        User Page
        <Outlet />
    </div>
  )
}
