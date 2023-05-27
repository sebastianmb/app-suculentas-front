import React, { useState } from 'react';
import ConfirmButton from './ConfirmButton';

const Cart = () => {
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log(data)
  };

  return (
    <div>
    <h2>Componente Padre</h2>
    <p>Datos del componente hijo</p>
    <ConfirmButton sendDataToParent={handleDataFromChild} />
  </div>
  );
};

export default Cart;
