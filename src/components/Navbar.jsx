import React, { useRef } from 'react'
import Logo from "../assets/images/logo.png"
import { cart } from '../data';

function Navbar() {
  const cartRef = useRef();
  const navbarRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
  };
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
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
    </header>
  )
}

export default Navbar