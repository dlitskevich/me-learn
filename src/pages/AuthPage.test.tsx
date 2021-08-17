import React from 'react';
import { render } from '@testing-library/react';
import { AuthPage } from './AuthPage';

test('renders learn react link', () => {
  const result = render(<AuthPage />);
  const googleAuth = result.container.querySelector('#firebaseui-auth-container')
  expect(googleAuth).toBeInTheDocument();
});
