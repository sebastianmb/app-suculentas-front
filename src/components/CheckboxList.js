import React from 'react';
import { useState } from 'react';
import ConfirmButton from './ConfirmButton';



const CheckboxList = ({ options: propOptions, cartItems, addToCart }) => {
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







/*CheckboxList antiguo


class CheckboxList extends Component {



  

  handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      options: prevState.options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    }));
  };

  handleQuantityChange = (id, quantity) => {
    this.setState((prevState) => ({
      options: prevState.options.map((option) =>
        option.id === id ? { ...option, quantity: quantity } : option
      )
    }));
  };

  render() {
    return (
      <div className='container-products'>
        {this.state.options.map((option) => (
          <div key={option.id} className='item'>
            <img src={option.image} alt={option.label} />
            <label>
              <input
                type="checkbox"
                checked={option.checked}
                onChange={() => this.handleCheckboxChange(option.id)}
              />
              {option.label}
            </label>
            {option.checked && (
              <input
                type="number"
                min="0"
                value={option.quantity}
                onChange={(event) => this.handleQuantityChange(option.id, parseInt(event.target.value))}
              />
            )}
            {option.checked && (
              <ConfirmButton
                option={option}
                addToCart={this.addToCart}

              />
              
            )}
            
          </div>
        ))}
        

      </div>

    );
  }
}

export default CheckboxList;

*/