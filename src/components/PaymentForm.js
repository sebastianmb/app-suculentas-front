import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PaymentForm = ({ price }) => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (!price || price <= 0) {
      // No muestra el formulario de pago si el precio no está definido o es cero
      return;
    }

    const monto = (price * 100).toString(); // Define monto here
    let hashHex; // Declare hashHex here


    axios.get('http://localhost:3900/generate-hash', {
      params: { monto }
    })
      .then(response => {
        hashHex = response.data.hash; // Define hashHex here
        setHash(hashHex);
      })
      .catch(error => {
        console.error('Error fetching hash:', error);
      });


    const uniqueReference = Date.now().toString();
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.dataset.render = 'button';
    script.dataset.publicKey = 'pub_test_wHrb6SSxOnNYI7201rvbBMW6CSa3ctIP';
    script.dataset.currency = 'COP';
    script.dataset.amountInCents = monto; // Use the calculated monto
    script.dataset.reference = uniqueReference;
    script.dataset.signature_integrity = hashHex; // Use hashHex here
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
