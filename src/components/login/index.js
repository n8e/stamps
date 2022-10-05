import PropTypes from 'prop-types';
import Logo from '../../assets/stamps.png';

import './styles.css';

export const LoginButton = ({ text, user, onClickHandler }) => {
  return (
    <p>
      <button className='green-button' onClick={() => onClickHandler(user)}>
        {text.toUpperCase()}
      </button>
    </p>
  );
}

export const LoginInput = ({ label, inputType, inputName, required, value, changeHandler }) => {
  return (
    <p>
      <input className='stretched-input'
        type={inputType}
        name={inputName}
        required={required}
        placeholder={label}
        value={value}
        onChange={(e) => changeHandler(e)}
      />
    </p>
  );
}

export const LoginLogo = () => {
  return (
    <div style={{ display: 'block' }}>
      <img src={Logo} alt="stamps logo" style={{ height: '100px', margin: '0 auto' }} />
    </div>
  )
}

LoginButton.propTypes = {
  text: PropTypes.string,
  user: PropTypes.object,
  onClickHandler: PropTypes.func
};

LoginInput.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  changeHandler: PropTypes.func
};
