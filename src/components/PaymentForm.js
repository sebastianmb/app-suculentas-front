import React, { useEffect } from 'react';



const PaymentForm = ({ price }) => {


  // Definir las variables aquí
  const reference = Date.now().toString();
  const publicKey = 'pub_test_wHrb6SSxOnNYI7201rvbBMW6CSa3ctIP';
  const currency = 'COP';
  const signatureIntegrity = 'prod_integrity_Z5mMke9x0k8gpErbDqwrJXMqsI6SFli6';
  const redirectUrl = 'http://localhost:3000/';

  const concatenatedValue = reference + publicKey + currency + signatureIntegrity + redirectUrl;

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
    script.dataset.amountInCents = (price * 100).toString();
    script.dataset.reference = uniqueReference;
    script.dataset.signature_integrity = 'test_integrity_H4xVIKNnEIpsfXUoy4CfTnyQPaF4655O';
    script.dataset.redirectUrl = "http://localhost:3000/";


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



