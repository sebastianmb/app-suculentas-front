import React , { useState } from 'react';


import pot from "../assets/images/pot.jpg";
import potpeq from "../assets/images/potpeq.svg";
import potmed from "../assets/images/potmed.svg";
import potgra from "../assets/images/potgra.svg";



//MercadoPago
const Pot = ({ addToCart }) => {
  

  const products = [
    { id: 11, name: 'small', price: 45000, quantity:1, maxQuantity:10, image: potpeq },
    { id: 12, name: 'medium', price: 60000, quantity:1, maxQuantity:15,image: potmed },
    { id: 13, name: 'large', price: 80000, quantity:1, maxQuantity:20,image: potgra },
  ];
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
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
                <div key={product.id}>
                <button className='btn-pot' key={product.id} onClick={() => handleAddToCart(product)}>
                  <img src={product.image} alt={product.labe} />
                  {/*product.price*/}
                </button>
                <p><strong>$ {product.price}</strong></p>
                {selectedProduct && selectedProduct.id === product.id && (
                  <p className='max-quantity-message'>Cantidad máxima de suculentas que puede seleccionar: {product.maxQuantity}</p>
                )}
                </div>
              ))}
              
            </div>

          </div>
        </div>

      </div>
    );
  
};
  export default Pot
