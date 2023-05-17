import React, { Component } from 'react';

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { id: 1, label: 'Opción 1', checked: false },
        { id: 2, label: 'Opción 2', checked: false },
        { id: 3, label: 'Opción 3', checked: false }
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

  render() {
    return (
      <div>
        {this.state.options.map((option) => (
          <div key={option.id}>
            <label>
              <input
                type="checkbox"
                checked={option.checked}
                onChange={() => this.handleCheckboxChange(option.id)}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default CheckboxList;