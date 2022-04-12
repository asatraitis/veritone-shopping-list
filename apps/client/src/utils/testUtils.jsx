import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

const customRender = (ui, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
