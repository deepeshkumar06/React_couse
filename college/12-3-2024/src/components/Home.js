import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <div>Home page
        <button onClick={() => navigate('/order')}>Order now</button>
    </div>
  )
}
