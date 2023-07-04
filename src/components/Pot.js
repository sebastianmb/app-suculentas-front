import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import pot from "../assets/images/pot.jpg";
import potpeq from "../assets/images/potpeq.svg";
import potmed from "../assets/images/potmed.svg";
import potgra from "../assets/images/potgra.svg";
//MercadoPago
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


//MercadoPago
const Pot = ({ addToCart }) => {
  const [preferenceId,setPreferenceId]=useState(null);

  initMercadoPago('TEST-c01960f1-ffa1-43f5-808b-52cfaf37361f');

  const createPreference = async()=>{
    try{
      const response = await axios.post("http://localhost:8080/create_preference",{
        description:"bananita contenta",
        price: 100,
        quantity:1,
        currency_id:"COP" //Configuracion moneda por si es necesario!!!!
      });

      const {id}= response.data;
      return id;

    } catch(error){
      console.log(error);
    }
  };

  const handleBuy = async()=>{
    const id = await createPreference();
    if(id){
      setPreferenceId(id);
    }
  };

  const products = [
    { id: 11, name: 'small', price: 45, quantity:1, image: potpeq },
    { id: 12, name: 'medium', price: 60, quantity:1, image: potmed },
    { id: 13, name: 'large', price: 80, quantity:1, image: potgra },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  
    return (
      <div id='suculentas'>
        <div className='center-suculentas'>
          <div className='mostrario-pot'>
            <img src={pot} alt='matera' className='' />
          </div>

          <div className='seleccion-pot'>
            <span><b>Seleccione el tamaño de matera</b></span>
            <div className='size-pot'>
              {products.map((product) => (
                <button className='btn-pot' key={product.id} onClick={() => handleAddToCart(product)}>
                  <img src={product.image} alt={product.labe} />
                </button>
                
              ))}
              <button onClick={handleBuy}>BUy</button>
              {preferenceId && <Wallet initialization={{ preferenceId }} />}
            </div>

          </div>
        </div>

      </div>
    );
  
};
  export default Pot
