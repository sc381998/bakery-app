import React from 'react'
import { menu } from '../data'

export const Products = (props) => {
    const onAddToCart = () => {
        console.log("sfknskc")
    }
    return (
        <section style={{ marginTop: "10rem" }}>
            <h1 className='heading'>
                New Products
            </h1>
            <div className='box-container'>
                {
                    menu.map(item => (
                        <div className='box' key={item.id}>
                            <img src={item.img} alt="" />
                            <h3>{item.name}</h3>
                            <div className='price'>{item.price}</div>
                            <a href="#" className='btn' onClick={onAddToCart}>Add to Cart</a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Products