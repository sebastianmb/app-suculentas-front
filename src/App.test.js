

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios'; // Importar axios para realizar mock de las llamadas a la API


jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: { message: 'Compra exitosa' } })),
}));



test('renders App correctly', () => {
  // ... Pruebas aquí ...

  render(<App />);

  // Verifica que el encabezado esté presente
  const headerElement = screen.getByText('Mi Encabezado');
  expect(headerElement).toBeInTheDocument();

  // Verifica que el slider esté presente
  const sliderElement = screen.getByTestId('slider-component');
  expect(sliderElement).toBeInTheDocument();
});

