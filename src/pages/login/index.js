import { useState } from 'react';
import PropTypes from 'prop-types';
import { LoginButton, LoginInput, LoginLogo } from '../../components';


import './styles.css';

const LoginCard = (props) => {
  const [user, setUser] = useState({ email: 'peter@microsoft.com', password: 'Aa11%$cccc' });

  const inputChangeHandler = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div>
      <LoginLogo />
      <LoginInput
        label="Email"
        inputType="text"
        inputName="email"
        required={true}
        value={user.email}
        changeHandler={inputChangeHandler}
      />
      <LoginInput
        label="Password"
        inputType="password"
        inputName="password"
        required={true}
        value={user.password}
        changeHandler={inputChangeHandler}
      />
      <p>Forgot Password?</p>
      <LoginButton
        text="login"
        user={user}
        onClickHandler={props.login}
      />
    </div>
  );
}

LoginCard.propTypes = {
  login: PropTypes.func,
};

export default LoginCard;