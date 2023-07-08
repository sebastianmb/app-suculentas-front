import React, { useEffect } from 'react';
import axios from 'axios';





const FormularioPago = () => {
  useEffect(() => {
    const loadMercadoPagoSDK = async () => {
      // Carga el SDK de Mercado Pago
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://sdk.mercadopago.com/js/v2';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });


      const mp = new window.MercadoPago('TEST-c01960f1-ffa1-43f5-808b-52cfaf37361f');
    };
    loadMercadoPagoSDK();

    // Obtén los tipos de documento y configura las opciones en el formulario
    async function getIdentificationTypes() {
      try {
        const response = await mp.getIdentificationTypes();
        const identificationTypes = response.body;

        // Obtén el elemento select para los tipos de documento
        const docTypeElement = document.getElementById('form-checkout__identificationType');

        // Función para crear las opciones en el elemento select
        function createSelectOptions(elem, options) {
          elem.options.length = 0;

          options.forEach((option) => {
            const opt = document.createElement('option');
            opt.value = option.id;
            opt.textContent = option.name;

            elem.appendChild(opt);
          });
        }

        createSelectOptions(docTypeElement, identificationTypes);
      } catch (error) {
        console.error('Error obteniendo los tipos de documento:', error);
      }
    }

    getIdentificationTypes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtén los valores de los campos del formulario
    const firstName = document.getElementById('form-checkout__payerFirstName').value;
    const lastName = document.getElementById('form-checkout__payerLastName').value;
    const email = document.getElementById('form-checkout__email').value;
    const identificationType = document.getElementById('form-checkout__identificationType').value;
    const identificationNumber = document.getElementById('form-checkout__identificationNumber').value;

    // Construye el objeto de datos de pago
    const paymentData = {
      firstName,
      lastName,
      email,
      identificationType,
      identificationNumber,
    };

    // Envía los datos de pago al servidor utilizando axios
    axios
      .post('/procesar-pago', paymentData)
      .then((response) => {
        console.log(response.data);
        // Realiza las acciones necesarias con la respuesta del servidor
      })
      .catch((error) => {
        console.error('Error al enviar los datos de pago:', error);
      });
  };

  return (
    <form id="form-checkout" onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="form-checkout__payerFirstName">Nombre</label>
          <input id="form-checkout__payerFirstName" name="payerFirstName" type="text" />
        </div>
        <div>
          <label htmlFor="form-checkout__payerLastName">Apellido</label>
          <input id="form-checkout__payerLastName" name="payerLastName" type="text" />
        </div>
        <div>
          <label htmlFor="form-checkout__email">E-mail</label>
          <input id="form-checkout__email" name="email" type="text" />
        </div>
        <div>
          <label htmlFor="form-checkout__identificationType">Tipo de documento</label>
          <select id="form-checkout__identificationType" name="identificationType"  type="text"/>
        </div>
        <div>
          <label htmlFor="form-checkout__identificationNumber">Número del documento</label>
          <input id="form-checkout__identificationNumber" name="identificationNumber" type="text" />
        </div>
      </div>

      <div>
        <div>
          <input type="hidden" name="transactionAmount" id="transactionAmount" value="100" />
          <input type="hidden" name="description" id="description" value="Nombre del Producto" />
          <br />
          <button type="submit">Pagar</button>
        </div>
      </div>
    </form>
  );
};

export default FormularioPago;
