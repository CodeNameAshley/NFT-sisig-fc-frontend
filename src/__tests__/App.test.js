import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/SFC/i);
  expect(title).toBeInTheDocument();
});
