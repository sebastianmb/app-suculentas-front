import React, { useState } from 'react';
import './App.css';


//Components
import Header from './components/Header';
import Slider from './components/Slider';
import Adverstiment from './components/Adverstiment';
import Pot from './components/Pot';
import Footer from './components/Footer'

import ConfirmButton from './components/ConfirmButton';
import Cart from './components/Cart';
import Products from './components/Products'
import Navbar from './components/Navbar';




function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  
 
  const handleConfirm = () => {
    // Lógica a ejecutar cuando se confirma
    console.log('Confirmado');
  };




  return (
    <div className="App">
      {/*Header*/}
      <Header />
      


      {/*Slider*/}
      <Slider />

      {/*Home*/}
      <Adverstiment />


      {/*Pot*/}
      <Pot addToCart={addToCart}/>
      {/*plants 1- 2- 3*/}
     
      <div id='suculentas-buy'>
        <div className='center-suculentas'>
          <div className='mostrario'>
            <Products addToCart={addToCart}
                      />
          </div>
          <div className='seleccion'>
            <span className='suculentas-base'><b>Seleccione suculentas base</b></span>
            <div>
              <h3>Confirmación</h3>
              <ConfirmButton  message="¿Estás seguro?" onConfirm={handleConfirm} />
            </div>
          </div>
        </div>

        
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />

      

      {/*Commerce*/}


      {/*Footer*/}
      <Footer />
     
      

    </div>
  );
}

export default App;
