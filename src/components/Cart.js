import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

const Cart = ({ cartItems, removeFromCart }) => {
  if (!cartItems || cartItems.length === 0) {
    return <div>No hay elementos en el carrito.</div>;
  }
  const handlePaymentSuccess = (details, data) => {
    // Lógica a ejecutar cuando el pago se completa correctamente
    console.log("Pago completado:", details);
  };
  
  return (
    <div className="cart-container" >
      <h2 className="cart-title">Orden en el Carrito</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '40px', paddingRight: '40px', width: '71%' }}>
        <span >
          Producto
        </span>
        <span>
          Cantidad
        </span>
        <span>
          Precio
        </span>

      </div>
      <ul className="product-list">
        {cartItems.map((item) => (

          <li key={item.id} className="product-item" >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '40px', paddingRight: '40px', width: '70%' }}>
              <div>
                <img src={item.image} alt={item.name} className="product-image"  />
                <span className="product-name">{item.name}</span>
              </div>
              <span className="product-quantity">Quantity: {item.quantity}</span>
              <span className="product-price">${item.quantity*item.price}</span>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-button" style={{marginLeft: '150px'}}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <PayPalButton
      amount="10.00"
      currency="USD"
      onSuccess={handlePaymentSuccess}
    />
    </div>
  );
};

export default Cart;