import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const result = render(<App />);
  const googleAuth = result.container.querySelector('#firebaseui-auth-container')
  expect(googleAuth).toBeInTheDocument();
});
