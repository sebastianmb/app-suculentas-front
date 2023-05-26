import React, { useState } from 'react';

const ConfirmButton = ({ message, onConfirm, addToCart, option, selectedOptions }) => {
  const [confirming, setConfirming] = useState(false);

  const handleClick = () => {
    if (confirming) {
      onConfirm();
    } else {
      setConfirming(true);
      addToCart(option);
      console.log(option);
      console.log(selectedOptions);
    }
  };

  return (
    <button onClick={handleClick}>
      {confirming ? message : 'Confirmar'}
    </button>
  );
};

export default ConfirmButton;