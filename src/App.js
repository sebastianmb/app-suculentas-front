import React, { useState } from 'react';
import './App.css';


//Components
import Header from './components/Header';
import Slider from './components/Slider';
import Adverstiment from './components/Adverstiment';
import Pot from './components/Pot';
import Footer from './components/Footer'


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







  return (
    <div className="App">
      {/*Header*/}
      <Header />



      {/*Slider*/}
      <Slider />

      {/*Home*/}
      <Adverstiment />


      {/*Pot*/}
      <Pot addToCart={addToCart} />
      {/*plants 1- 2- 3*/}

      <div id='suculentas-buy'>
        <div className='center-suculentas'>
          <div className='mostrario'>
            <Products addToCart={addToCart}
            />
          </div>
          <div className='seleccion'>
            <span className='suculentas-base'>
              <b>Seleccione suculentas base</b>
            </span>
            <div>
              <p style={{margin:'50px',marginTop:'150px',textAlign:'left',fontSize:'17px'}}>
              <strong>¡Descubre nuestras suculentas de categoría base!</strong> Estas suculentas de baja altura se extienden a lo largo del suelo, creando hermosas alfombras naturales.
              Con su crecimiento compacto y su capacidad para resistir condiciones adversas, estas suculentas agregarán un toque de belleza duradera y de bajo mantenimiento a tu entorno. 
              </p>
            </div>
          </div>
        </div>


      </div>
      <div id='suculentas-buy'>
        <div className='center-suculentas'>
          <div className='mostrario'>
            <Products addToCart={addToCart}
            />
          </div>
          <div className='seleccion'>
            <span className='suculentas-base'>
              <b>Seleccione suculentas base</b>
            </span>
            <div>
              <p style={{margin:'50px',marginTop:'150px',textAlign:'left',fontSize:'17px'}}>
              <strong>¡Descubre nuestras suculentas de categoría base!</strong> Estas suculentas de baja altura se extienden a lo largo del suelo, creando hermosas alfombras naturales.
              Con su crecimiento compacto y su capacidad para resistir condiciones adversas, estas suculentas agregarán un toque de belleza duradera y de bajo mantenimiento a tu entorno. 
              </p>
            </div>
          </div>
        </div>


      </div>
      <div id='suculentas-buy'>
        <div className='center-suculentas'>
          <div className='mostrario'>
            <Products addToCart={addToCart}
            />
          </div>
          <div className='seleccion'>
            <span className='suculentas-base'>
              <b>Seleccione suculentas base</b>
            </span>
            <div>
              <p style={{margin:'50px',marginTop:'150px',textAlign:'left',fontSize:'17px'}}>
              <strong>¡Descubre nuestras suculentas de categoría base!</strong> Estas suculentas de baja altura se extienden a lo largo del suelo, creando hermosas alfombras naturales.
              Con su crecimiento compacto y su capacidad para resistir condiciones adversas, estas suculentas agregarán un toque de belleza duradera y de bajo mantenimiento a tu entorno. 
              </p>
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
