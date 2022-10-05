import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginCard from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<LoginCard />);
  root.unmount();
});