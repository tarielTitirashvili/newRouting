import React from 'react'
import {Link} from 'react-router-dom'

const PRODUCTS = [
  {id: 0, title: 'product 1'},
  {id: 1, title: 'product 2'},
  {id: 2, title: 'product 3'},
  {id: 3, title: 'product 4'},
  {id: 4, title: 'product 5'},
]

function ProductPage() {
  return (<div>
    <h1>The Products Page</h1>
    <ul>
      {
        PRODUCTS.map((product)=>(
            <li>
              <Link to={`${product.id}`}>
                {product.title}
              </Link>
            </li>
          )
        )
      }
    </ul>
  </div>
  )
}

export default ProductPage