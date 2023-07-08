import React, { useEffect, useRef } from 'react'
import Logo from "../assets/images/bakeryLogo.jpg"
import { menu } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions';

function Navbar() {
  const cartRef = useRef();
  const navbarRef = useRef();
  const dispatch = useDispatch();
  const selectedData = useSelector(state => state.cartData.selectedData)
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
  };

  const updatedCart = menu.filter(ele => selectedData.includes(ele.id))
  return (
    <header className='header'>
      <a href='#' className='logo'>
        <img src={Logo} alt="" />
      </a>
      <nav className='navbar' ref={navbarRef}>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#menu'>Menu</a>
        <a href='#product'>Product</a>
        <a href='#contact'>Contact</a>
      </nav>
      <div className="icons">
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <span style={{fontSize: "20px", color: "#ffc107"}}>{updatedCart.length}</span>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {updatedCart.length ? 
          updatedCart.map(item => (
            <div className="cart-item" key={item.id}>
              <span className="fas fa-times" onClick={() => dispatch(removeFromCart(item.id))}></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>{item.name}</h3>
                <div className="price">{item.price}</div>
              </div>
            </div>
          )) : 
            <div className='empty-cart'>Your cart is empty</div>
          }
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
    </header>
  )
}

export default Navbar