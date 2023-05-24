import React, { Component } from 'react';
import suculenta from "../assets/images/example-sucu.jpg"
import ConfirmButton from './ConfirmButton';



class CheckboxList extends Component {



  constructor(props) {
    super(props);
    this.state = {
      options: [
        { id: 1, label: 'Opción 1', checked: false, quantity: 0, image: suculenta },
        { id: 2, label: 'Opción 2', checked: false, quantity: 0, image: suculenta },
        { id: 3, label: 'Opción 3', checked: false, quantity: 0, image: suculenta },
        { id: 4, label: 'Opción 1', checked: false, quantity: 0, image: suculenta },
        { id: 5, label: 'Opción 2', checked: false, quantity: 0, image: suculenta },
        { id: 6, label: 'Opción 3', checked: false, quantity: 0, image: suculenta }
      ],
      cartItems: []
    };
  }
  addToCart = (option) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, option],
    }));
  };

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