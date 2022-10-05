import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dashboard, LoginCard } from './pages';
import { loginRequester } from './helpers';

import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState({ success: false, error: null });

  const handleLogin = async ({ email, password }) => {
    if (!email || !password) {
      setLoggedIn({ ...loggedIn, error: 'Fields cannot be empty' });
    } else {
      const { data, error } = await loginRequester({ email, password });
      setLoggedIn({
        ...(error && { error: error.message }),
        ...(data && { success: data.success })
      });
    }
  }

  return loggedIn.success 
    ? (<Dashboard loggedIn={loggedIn.success} />)
    : (
        <div className = "stamps card">
          <div>
            {(loggedIn.error) ? (
              <div className="error">{loggedIn.error}</div>
            ) : null}
            <LoginCard login={handleLogin} />
          </div>
        </div>
      );
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
