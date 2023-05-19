import React, { Component } from 'react';
import suculenta from "../assets/images/example-sucu.jpg"

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { id: 1, label: 'Opción 1', checked: false, quantity: 0, Image: { suculenta } },
        { id: 2, label: 'Opción 2', checked: false, quantity: 0, Image: { suculenta } },
        { id: 3, label: 'Opción 3', checked: false, quantity: 0, Image: { suculenta } }
      ]
    };
  }

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
      <div>
        {this.state.options.map((option) => (
          <div key={option.id}>
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

          </div>
        ))}
      </div>
    );
  }
}

export default CheckboxList;