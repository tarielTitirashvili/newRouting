import React from 'react'
import { useParams, Link } from 'react-router-dom'

function ProductDetails() {

  const params = useParams()

  return (
    <div>
      ProductDetails!{params.productId}
      <Link to='..' relative='path'>
        <button>back</button>
      </Link>
    </div>
  )
}

export default ProductDetails