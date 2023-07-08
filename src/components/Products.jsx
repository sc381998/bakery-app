import React from 'react'
import { menu } from '../data'

export const Products = (props) => {
  return (
    <section style={{marginTop: "10rem"}}>
        <h1 className='heading'>
            New Products
        </h1>
        <div className='box-container'>
            {
                menu.map(item => (
                    <div className='box'>
                        <img src={item.img} alt=""/>
                        <h3>Cake</h3>
                        <div className='price'> 15.99</div>
                        <a href="" className='btn'>Add to Cart</a>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Products