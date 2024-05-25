import React, { useState } from 'react';
import './App.css';
import Nav from "./Componants/Nav";
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Fake from './Fake/Fake';
import FakeDommy from './Fake/FakeDommy';
import SingleDommy from './pages/SingleDommy';
import SingleFake from './Fake/SingleFake';
import Cart from './Fake/Cart';


const App = () => {
  const [dark, setDark] = useState(false);
  const [cart, setCart] = useState([]);

  function isDark() {
    setDark(!dark);
  }

  function addToCart(product) {
    const value = cart.find(item => item.id === product.id);
    if (value) {
      swal({
        title: "Sorry!",
        text: "this product Will Added after!",
        icon: "warning",
        button:false,
        timer:1000,
      });
    } else {
      setCart([...cart, product]);
      swal({
        title: "The product has now been added to the cart",
        text: "You WElcome😊",
        icon: "success",
        button: "Aww yiss!",
        showConfirmButton:false,
        timer:1000,
      });
    }
    console.log(cart.length)
  }
  function REMOVE(product){
setCart(cart.filter(item=>item.id !== product.id))
  }
 

  return (
    <div className={dark ? 'app-dark' : 'app'}>
      <BrowserRouter>
        <Nav dark={dark} isDark={isDark} cart={cart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Fake" element={<Fake />} />
          <Route path="/FakeDommy" element={<FakeDommy />} />
          <Route path="/singledommy/:id" element={<SingleDommy />} />
          <Route path="/SingleFake/:id" element={<SingleFake />} />
          <Route path="/Cart" element={<Cart  cart={cart} REMOVE={REMOVE}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
