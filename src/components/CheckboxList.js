import React from 'react';
import { useState } from 'react';
import ConfirmButton from './ConfirmButton';



const CheckboxList = ({ options: propOptions, cartItems, addToCart }) => {

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState(propOptions);
  const handleCheckboxChange = (id) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, checked: !option.checked } : option
    );
    // Actualizar el estado options con los valores actualizados
    setOptions(updatedOptions);
  };

  const handleQuantityChange = (id, quantity) => {
    const qupdatedOptions = options.map((option) =>
      option.id === id ? { ...option, quantity: quantity } : option
    );
    setOptions(qupdatedOptions);

    const selected = qupdatedOptions
      .filter((option) => option.checked)
      .map((option) => ({ ...option, quantity: option.quantity || 0 }));
    setSelectedOptions(selected);

  };

  if (!options) {
    return <div>No hay opciones disponibles.</div>;
  }

  return (
    <div className='container-products'>
      {options.map((option) => (

        <div key={option.id} className='item'>
          <img src={option.image} alt={option.label} />
          <label>
            <input
              type="checkbox"
              checked={option.checked}
              onChange={() => handleCheckboxChange(option.id)}
            />
            {option.label}
          </label>
          {option.checked && (
            <input
              type="number"
              min="0"
              value={option.quantity}
              onChange={(event) => handleQuantityChange(option.id, parseInt(event.target.value))}
            />

          )}
          {option.checked && (
            <ConfirmButton
              selectedOptions={selectedOptions}
              option={option}
              addToCart={addToCart}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;

