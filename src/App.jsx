import React, { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Navbar />
      <main style={{marginTop: "10rem"}}>
        <Banner />
        <Products />
        <Footer />
      </main>
    </>
  )
}

export default App
