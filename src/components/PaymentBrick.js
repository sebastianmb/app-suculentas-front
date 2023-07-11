import React, { useEffect } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { Payment } from '@mercadopago/sdk-react';

initMercadoPago('TEST-76e4889c-e705-4939-afad-8f8a4771c494');



const PaymentBrick = ({ preferenceId }) => {
  const initialization = {
    amount: 10000,
    preferenceId: preferenceId,
   };
   const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
   };
   const onSubmit = async (
    { selectedPaymentMethod, formData }
   ) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // recibir el resultado del pago
          resolve();
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          reject();
        });
    });
   };
   const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
   };
   const onReady = async () => {
    /*
      Callback llamado cuando el Brick está listo.
      Aquí puede ocultar cargamentos de su sitio, por ejemplo.
    */
   };

  return (

    <Payment
   initialization={initialization}
   customization={customization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
  );
};

export default PaymentBrick;
