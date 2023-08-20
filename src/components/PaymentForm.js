import React, { useEffect, useState } from 'react';
import { SHA256 } from 'crypto-js';

const PaymentForm = ({ price }) => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (!price || price <= 0) {
      // No muestra el formulario de pago si el precio no está definido o es cero
      return;
    }

    // Definir las variables aquí
    const reference = Date.now().toString();
    const monto = (price * 100).toString();
    const currency = 'COP';
    const signatureIntegrity = 'test_integrity_H4xVIKNnEIpsfXUoy4CfTnyQPaF4655O';

    const concatenatedValue = reference + monto + currency + signatureIntegrity;
    const hashHex = SHA256(concatenatedValue).toString();
    
    setHash(hashHex);

    const uniqueReference = Date.now().toString();
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.dataset.render = 'button';
    script.dataset.publicKey = 'pub_test_wHrb6SSxOnNYI7201rvbBMW6CSa3ctIP';
    script.dataset.currency = 'COP';
    script.dataset.amountInCents = monto; // Use the calculated monto
    script.dataset.reference = uniqueReference;
    script.dataset.signature_integrity = hashHex;
    script.dataset.redirectUrl = 'http://localhost:3000/';

    const form = document.getElementById('payment-form');
    if (form) {
      form.appendChild(script);
    }

    return () => {
      if (form) {
        form.removeChild(script);
      }
    };
  }, [price]);

  return (
    <div>
      
      <form id="payment-form">
        {/* Aquí puedes agregar el contenido del formulario, como campos de entrada u otros elementos */}
      </form>
    </div>
  );
};

export default PaymentForm;
