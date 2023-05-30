// Cart.js

import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  if (!cartItems) {
    return <div>No hay elementos en el carrito.</div>;
  }
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
