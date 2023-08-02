import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
// Datos
import DataProvider from './components/context/DataContext';

//Components
import Header from './components/Header';
import Slider from './components/Slider';
import Adverstiment from './components/Adverstiment';
import Pot from './components/Pot';
import Footer from './components/Footer'


import Cart from './components/Cart';
import Products from './components/Products'
import PaymentForm from './components/PaymentForm';






function App() {

  const [cartItems, setCartItems] = useState([]);
  const [showPaymentForm, setShowPaymentForm] = useState(false); // Estado para controlar la visibilidad de PaymentForm
  


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };


  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price;
  });

  const saveBuy = () => {

    axios.post('http://localhost:3900/api/compras', { compra: cartItems })
      .then((response) => {
        // Maneja la respuesta del backend si es necesario
        console.log(response.data.message);
      })
      .catch((error) => {
        // Maneja cualquier error en la solicitud
        console.error('Error al enviar la compra:', error);
      });
    console.log(cartItems);
    setShowPaymentForm(true); // Mostrar el formulario de pago cuando se haga clic en Confirmar
  }
   

  
  return (
    <DataProvider>
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
              <Products addToCart={addToCart} category="base"
              />
            </div>
            <div className='seleccion'>
              <span className='suculentas-base'>
                <b>Seleccione suculentas base</b>
              </span>
              <div>
                <p style={{ margin: '50px', marginTop: '150px', textAlign: 'left', fontSize: '17px' }}>
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
                <b>Seleccione suculentas mediana altura</b>
              </span>
              <div>
                <p style={{ margin: '50px', marginTop: '150px', textAlign: 'left', fontSize: '17px' }}>
                <strong>Explora nuestra asombrosa selección de suculentas de categoría mediana altura!!!!</strong> Estas hermosas plantas destacan con su tamaño versátil, elevándose con elegancia desde el suelo. Su crecimiento compacto y su resistencia a diversas condiciones hacen que estas suculentas sean ideales para agregar un toque de belleza natural y bajo mantenimiento a cualquier espacio.
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
                <b>Seleccione suculentas altas</b>
              </span>
              <div>
                <p style={{ margin: '50px', marginTop: '150px', textAlign: 'left', fontSize: '17px' }}>
                  <strong>Descubre nuestras impresionantes suculentas de categoría alta.</strong> Estas majestuosas plantas se alzan con gracia, ofreciendo una presencia imponente en cualquier espacio. Con su crecimiento vertical y sus fascinantes formas, estas suculentas añadirán un toque de esplendor natural y fácil cuidado a tu entorno. Disfruta de la elegancia y singularidad que estas suculentas aportan a tu colección de plantas.
                </p>
              </div>
            </div>
          </div>


        </div>

        {cartItems.length > 0 && !showPaymentForm && (
          <>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            <button onClick={saveBuy} className='Confirm'>Confirmar</button>
          </>
        )}
        {showPaymentForm && (<PaymentForm price={totalPrice}/>)}


        {/*Commerce*/}


        {/*Footer*/}
        <Footer />



      </div>

    </DataProvider>
  );
}

export default App;
