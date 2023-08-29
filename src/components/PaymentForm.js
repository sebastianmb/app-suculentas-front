import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ price }) => {
  const [hash, setHash] = useState('');
  const [formData, setFormData] = useState({}); // Agrega el estado para almacenar los datos del formulario

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newFormData = new FormData(form);
    setFormData(Object.fromEntries(newFormData)); // Guardar los datos del formulario en el estado
  };

  useEffect(() => {
    if (!price || price <= 0) {
      // No muestra el formulario de pago si el precio no está definido o es cero
      return;
    }

    const monto = (price * 100).toString();

    axios.get('http://localhost:3900/generate-hash', {
      params: { monto }
    })
      .then(response => {
        const hashHex = response.data.hash;
        setHash(hashHex);
        
        const uniqueReference = Date.now().toString();
        const script = document.createElement('script');
        script.src = 'https://checkout.wompi.co/widget.js';
        script.dataset.render = 'button';
        script.dataset.publicKey = 'pub_test_wHrb6SSxOnNYI7201rvbBMW6CSa3ctIP';
        script.dataset.currency = 'COP';
        script.dataset.amountInCents = monto;
        script.dataset.reference = uniqueReference;
        script.dataset.signature_integrity = hashHex;
        script.dataset.redirectUrl = 'http://localhost:3000/';
        
        // Obtener los valores de los campos de envío desde el estado formData
        const shippingAddressLine1 = formData['shipping-address:address-line-1'];
        const shippingAddressLine2 = formData['shipping-address:address-line-2'];
        const shippingCountry = formData['shipping-address:country'];
        const shippingCity = formData['shipping-address:city'];
        const shippingPhoneNumber = formData['shipping-address:phone-number'];
        const shippingRegion = formData['shipping-address:region'];
        const shippingName = formData['shipping-address:name'];
        
        // Asignar los valores al script de Wompi
        script.dataset['shipping-address:address-line-1'] = shippingAddressLine1;
        script.dataset['shipping-address:address-line-2'] = shippingAddressLine2;
        script.dataset['shipping-address:country'] = shippingCountry;
        script.dataset['shipping-address:city'] = shippingCity;
        script.dataset['shipping-address:phone-number'] = shippingPhoneNumber;
        script.dataset['shipping-address:region'] = shippingRegion;
        script.dataset['shipping-address:name'] = shippingName;
        
        const form = document.getElementById('payment-form');
        if (form) {
          form.appendChild(script);
        }
        
        return () => {
          if (form) {
            form.removeChild(script);
          }
        };
      })
      .catch(error => {
        console.error('Error fetching hash:', error);
      });
  }, [price, formData]); // Agregar formData como dependencia

  return (
    <div>
      <form id="payment-form" onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <input type="text" name="shipping-address:address-line-1" placeholder="Dirección de envío, línea 1" />
        <input type="text" name="shipping-address:address-line-2" placeholder="Dirección de envío, línea 2" />
        <input type="text" name="shipping-address:country" placeholder="País de envío" />
        <input type="text" name="shipping-address:city" placeholder="Ciudad de envío" />
        <input type="text" name="shipping-address:phone-number" placeholder="Número de teléfono de envío" />
        <input type="text" name="shipping-address:region" placeholder="Región de envío" />
        <input type="text" name="shipping-address:name" placeholder="Nombre de envío" />
        {/* Agrega más campos según tus necesidades */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PaymentForm;
