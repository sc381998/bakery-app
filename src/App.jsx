import React, { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import Products from './components/Products';

function App() {

  return (
    <>
      <Navbar />
      <main style={{marginTop: "10rem"}}>
        <Banner />
        <Products />
      </main>
    </>
  )
}

export default App
