import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // render app component in artificial DOM
  const linkElement = screen.getByText("Hello");
  expect(linkElement).toBeInTheDocument();
});
