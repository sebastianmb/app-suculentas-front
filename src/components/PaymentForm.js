import React, { useEffect } from 'react';



const PaymentForm = ({price}) => {
  useEffect(() => {

    if (!price || price <= 0) {
      // No muestra el formulario de pago si el precio no está definido o es cero
      return;
    }


    const uniqueReference = Date.now().toString();
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.dataset.render = 'button';
    script.dataset.publicKey = 'pub_test_wHrb6SSxOnNYI7201rvbBMW6CSa3ctIP';
    script.dataset.currency = 'COP';
    script.dataset.amountInCents = (price*100).toString();
    script.dataset.reference = uniqueReference;
    script.dataset.signature_integrity = '37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5';
    script.dataset.redirectUrl="http://localhost:3000/";
     

    const form = document.getElementById('payment-form');
    if (form) {
      form.appendChild(script);
    
    
    };
  

   

    return () => {
      if (form) {
        form.removeChild(script);
      }
    };

   

  }, [price]);

  return (
    <form id="payment-form">
      {/* Aquí puedes agregar el contenido del formulario, como campos de entrada u otros elementos */}
    </form>
  );
};

export default PaymentForm;



