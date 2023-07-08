import React from 'react'
import cake from "../assets/images/product-3.png"
function Banner() {
  return (
    <section className='outer-banner'>
      <div className='inner-banner'>
        <div className='banner-content'>
          <img src={cake} alt="" height={100} width={100}/>
          <div className='cake-description'>
            <h2>Products</h2>
            <p>some description about thte cake</p>
          </div>
        </div>
        <div className='banner-content'>
          <img src={cake} alt="" height={100} width={100}/>
          <div className='cake-description'>
            <h2>Cake Class</h2>
            <p>some description about thte cake</p>
          </div>
        </div>
        <div className='banner-content'>
          <img src={cake} alt="" height={100} width={100}/>
          <div className='cake-description'>
            <h2>Recipes</h2>
            <p>some description about thte cake</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner