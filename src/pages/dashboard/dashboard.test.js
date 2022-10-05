import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Dashboard />);
  root.unmount();
});