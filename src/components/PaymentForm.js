import React, { useEffect } from 'react';

const PaymentForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.dataset.render = 'button';
    script.dataset.publicKey = 'pub_test_wHrb6SSxOnNYI7201rvbBMW6CSa3ctIP';
    script.dataset.currency = 'COP';
    script.dataset.amountInCents = '4950000';
    script.dataset.reference = '123412445';
    script.dataset.signature_integrity = '37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5';

    const form = document.getElementById('payment-form');
    if (form) {
      form.appendChild(script);
    }

    return () => {
      if (form) {
        form.removeChild(script);
      }
    };
  }, []);

  return (
    <form id="payment-form">
      {/* Aquí puedes agregar el contenido del formulario, como campos de entrada u otros elementos */}
    </form>
  );
};

export default PaymentForm;



