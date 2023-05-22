import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
