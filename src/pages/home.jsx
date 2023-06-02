import React from 'react'
import css from './home.module.css'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>navigate('products')}>products</button>
    </div>
  )
}
