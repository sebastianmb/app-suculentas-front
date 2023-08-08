

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { dataContext } from './components/context/DataContext';
import Products from './Products';

describe('Products Component', () => {
  // Mocking the data context for testing
  const mockData = {
    data:[
      { "id": 1, "category":"base", "name":"Product 1", "quantity": 0, "image": "base1.jpeg" },
      { "id": 2, "category":"base","name": "Product 2",  "quantity": 0, "image": "base2.jpeg" },
      { "id": 3, "category":"media","name": "Product 3", "quantity": 0, "image": "media1.jpeg" },
      { "id": 4, "category":"media","name": "Product 4", "quantity": 0, "image": "media2.jpeg" },
      { "id": 5, "category":"media","name": "Product 5", "quantity": 0, "image": "media3.jpeg" },
      { "id": 6, "category":"media","name": "Product 6", "quantity": 0, "image": "media4.jpeg" },
      { "id": 7, "category":"media","name": "Product 7", "quantity": 0, "image": "media5.jpeg" },
      { "id": 8, "category":"media","name": "Product 8", "quantity": 0, "image": "media6.jpeg" },
      { "id": 9, "category":"alta","name": "Product 9", "quantity": 0, "image": "alta1.jpeg" },
      { "id": 10, "category":"alta","name": "Product 10", "quantity": 0, "image": "alta2.jpeg" },
      { "id": 11, "category":"pot","name": "small", "price": 45, "quantity":1, "image": "potpeq" },
      { "id": 12, "category":"pot","name": "medium", "price": 60, "quantity":1, "image": "potmed" },
      { "id": 13, "category":"pot","name": "large", "price": 80, "quantity":1, "image": "potgra" }
     
     
  ]
  };

  test('renders products correctly', () => {
    render(
      <dataContext.Provider value={mockData}>
        <Products addToCart={() => {}} category="base" />
      </dataContext.Provider>
    );

    // Replace this with your actual rendering logic
    const productElements = screen.getAllByTestId('product'); // Use the appropriate test id

    expect(productElements).toHaveLength(mockData.data.length);
  });

  test('adds product to cart when "Add to Cart" is clicked', () => {
    // Initialize a mock addToCart function
    const addToCartMock = jest.fn();

    render(
      <dataContext.Provider value={mockData}>
        <Products addToCart={addToCartMock} category="base" />
      </dataContext.Provider>
    );

    // Replace this with your actual rendering and interaction logic
    const addToCartButtons = screen.getAllByText('Add to Cart'); // Use the appropriate text
    fireEvent.click(addToCartButtons[0]); // Click the first "Add to Cart" button

    expect(addToCartMock).toHaveBeenCalledWith(mockData.data[0]); // Check if addToCart function was called with the correct product
  });

  // Add more test cases as needed
});
