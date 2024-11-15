// Import testing utilities from the @testing-library/react package
import { render, screen } from '@testing-library/react';
// Import the main App component to be tested
import App from './App.js';

// Define a test case to verify if a specific element is rendered
test('renders learn react link', () => {
// Render the App component in a virtual DOM for testing
  render(<App />);

// Find an element containing the text "learn react" 
  const linkElement = screen.getByText(/learn react/i);

// Assert that the element is present in the document
  expect(linkElement).toBeInTheDocument();
});
