import React, { useEffect } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { Payment } from '@mercadopago/sdk-react';

const PaymentBrick = ({ preferenceId }) => {
  useEffect(() => {
    initMercadoPago('TEST-76e4889c-e705-4939-afad-8f8a4771c494');
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/process_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      // Recibir el resultado del pago y realizar acciones adicionales si es necesario
      console.log(result);
    } catch (error) {
      // Manejar el error al intentar crear el pago
      console.error(error);
    }
  };

  const initialization = {
    amount: 10000,
    preferenceId: preferenceId,
  };

  const customization = {
    paymentMethods: {
      ticket: 'all',
      bankTransfer: 'all',
      creditCard: 'all',
      debitCard: 'all',
      mercadoPago: 'all',
    },
  };

  const onError = async (error) => {
    // Callback llamado para todos los casos de error de Brick
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
