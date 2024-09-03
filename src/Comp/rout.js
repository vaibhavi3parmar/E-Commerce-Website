import React from 'react';
import { Route, Routes } from 'react-router';
import Cart from './cart';
import Contact from './contact';
import Home from './home';
import Shop from './shop';
const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addtocart={addtocart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart ={setCart}/>} />
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default Rout