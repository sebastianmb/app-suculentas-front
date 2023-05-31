import React, { useState } from 'react';
import './App.css';


//Components
import Header from './components/Header';
import Slider from './components/Slider';
import Adverstiment from './components/Adverstiment';
import Pot from './components/Pot';
import Footer from './components/Footer'
import CheckboxList from './components/CheckboxList';
import ConfirmButton from './components/ConfirmButton';
import Cart from './components/Cart';
import Products from './components/Products'
import Navbar from './components/Navbar';
//Imagen
import suculenta from "./assets/images/example-sucu.jpg"



function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  
 


  /* Ajuste Cart
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (option) => {
    setCartItems([...cartItems, option]);
  };

  const options = [
    { id: 1, label: 'Opción 1', checked: false, quantity: 0, image: suculenta },
    { id: 2, label: 'Opción 2', checked: false, quantity: 0, image: suculenta },
    { id: 3, label: 'Opción 3', checked: false, quantity: 0, image: suculenta },
    { id: 4, label: 'Opción 1', checked: false, quantity: 0, image: suculenta },
    { id: 5, label: 'Opción 2', checked: false, quantity: 0, image: suculenta },
    { id: 6, label: 'Opción 3', checked: false, quantity: 0, image: suculenta }
  ];



*/
  const handleConfirm = () => {
    // Lógica a ejecutar cuando se confirma
    console.log('Confirmado');
  };




  return (
    <div className="App">
      {/*Header*/}
      <Header />
      <Navbar cartItemCount={cartItems.length} />


      {/*Slider*/}
      <Slider />

      {/*Home*/}
      <Adverstiment />


      {/*Pot*/}
      <Pot />
      {/*plants 1- 2- 3*/}
     
      <div id='suculentas'>
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

        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>

      

      {/*Commerce*/}


      {/*Footer*/}
      <Footer />
     
      <Cart/>

    </div>
  );
}

export default App;
