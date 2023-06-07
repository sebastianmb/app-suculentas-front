import React from 'react';
import pot from "../assets/images/pot.jpg";
import potpeq from "../assets/images/potpeq.svg";
import potmed from "../assets/images/potmed.svg";
import potgra from "../assets/images/potgra.svg";

const Pot = ({ addToCart }) => {
  ;

  const products = [
    { id: 1, name: 'small', price: 45, quantity:1, image: potpeq },
    { id: 2, name: 'medium', price: 60, quantity:1, image: potmed },
    { id: 3, name: 'large', price: 80, quantity:1, image: potgra },
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
                <button key={product.id} onClick={() => handleAddToCart(product)}>
                  <img src={product.image} alt={product.labe} />
                </button>

              ))}
            </div>

          </div>
        </div>

      </div>
    );
  
};
  export default Pot
