import React from 'react';


const Cart = ({ cartItems, removeFromCart }) => {
  if (!cartItems || cartItems.length === 0) {
    return <div>No hay elementos en el carrito.</div>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <ul className="product-list">
        {cartItems.map((item) => (
          <li key={item.id} className="product-item">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <span className="product-name">{item.name}</span>
              <div className="product-details">
                <span className="product-quantity">Quantity: {item.quantity}</span>
                <span className="product-price">${item.price}</span>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;