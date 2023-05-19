import React, { useState } from 'react';

const ConfirmButton = ({ message, onConfirm }) => {
  const [confirming, setConfirming] = useState(false);

  const handleClick = () => {
    if (confirming) {
      onConfirm();
    } else {
      setConfirming(true);
    }
  };

  return (
    <button onClick={handleClick}>
      {confirming ? message : 'Confirmar'}
    </button>
  );
};

export default ConfirmButton;