import React from 'react';
import App from './App';
import { renderWithProvider } from './jest/utils'
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Fake create store
const mockStore = createStore([thunk]);

test('renders learn react link', () => {
  const store  = mockStore({ todos: { results: {} } });
  const { getByText, debug } = renderWithProvider ( <App />, { store });
    debug();
  const title = getByText(/gladys/i);
  expect(title).toBeInTheDocument();
});
