import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      const data = await response.json();
      setAllproducts(data);
    } catch (err) {
      console.log(err)
    }
  }
  const remove_product = async(id)=>{
    console.log(id)
    try {
      await fetch('http://localhost:4000/deleteproduct',{
        method:'POST',
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify({id:id})
      })
      await fetchInfo();
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return <>
            <div key={index} className='listproduct-format-main listproduct-format'>
              <img src={product.image} alt="" className='listproduct-product-icon' />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{
                remove_product(product.id)
              }} className='listproduct-remove-icon' src={cross_icon} alt="" />
            </div>
            <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct