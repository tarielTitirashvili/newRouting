import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from '../components/header'

function RootLayout() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout