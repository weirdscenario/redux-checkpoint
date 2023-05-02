import React from 'react'
import { PRODUCTS } from '../Products'

const Product = (props) => {
  const {id,productName,price,productImage}=props.data
  return (
    <div>
      my Id is {id}
    </div>
  )
}

export default Product
