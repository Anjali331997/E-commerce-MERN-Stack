import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrump from '../components/Breadcrump/Breadcrump'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
const Product = () => {

  const { all_product } = useContext(ShopContext)
  console.log(all_product)
  const { productId } = useParams();
  const product = all_product.find((e) => {
    return (e.id === Number(productId))
  })
  return (
    <div>
      <Breadcrump product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product