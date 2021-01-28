import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Nottingham Trades in Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nottingham Trades/i);
  expect(linkElement).toBeInTheDocument();
});
