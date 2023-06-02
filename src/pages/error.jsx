import React from 'react'
import Header from '../components/header'

function Error() {
  return (<>
    <Header />
    <main>
      <h1>An error occurred!</h1>
      <p>Could not find this page!</p>
    </main>
  </>
  )
}

export default Error