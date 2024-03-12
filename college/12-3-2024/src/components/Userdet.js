import React from 'react'
import { useParams } from 'react-router-dom'

export default function Userdet() {
    const {userid} = useParams()
  return (
    <div>User Detail is {userid}</div>
  )
}
