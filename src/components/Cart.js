import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map((option, index) => (
          <li key={index}>{option.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
