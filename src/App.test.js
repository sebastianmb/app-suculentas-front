import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('clicking Confirm button opens PaymentForm', () => {
  render(<App />);

  // Simular agregar elementos al carrito
  const addToCartButton = screen.getByText('Agregar al carrito');
  fireEvent.click(addToCartButton);

  // Simular hacer clic en el botón Confirmar
  const confirmButton = screen.getByText('Confirmar');
  fireEvent.click(confirmButton);

  // Verificar que PaymentForm esté visible
  const paymentForm = screen.getByTestId('payment-form');
  expect(paymentForm).toBeInTheDocument();
});
