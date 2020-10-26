import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react links', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn reactt/i);
  expect(linkElement).toBeInTheDocument();
});