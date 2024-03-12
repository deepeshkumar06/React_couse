import React from 'react'
import { useAuth } from './Auth'

export const Profile = () => {
    const auth = useAuth()
    const handlelogout = () => {
        auth.logout()
    }
  return (
    <div>
        Welcome {auth.user}
        <button onClick={handlelogout}>logout</button>
    </div>
  )
}