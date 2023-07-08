import React, { useEffect } from 'react'
import { menu } from '../data'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from "../actions";

export const Products = (props) => {
    const dispatch = useDispatch();
    const selectedData = useSelector(state => state.cartData.selectedData)
    const onAddToCart = (id) => {
        dispatch(addToCart(id))
    }
    const onRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
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
                            {selectedData.includes(item.id) ? 
                            <a href="#" className='btn' onClick={() => onRemoveFromCart(item.id)}>Remove from Cart</a> :
                            <a href="#" className='btn' onClick={() => onAddToCart(item.id)}>Add to Cart</a>
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
  
export default Products;