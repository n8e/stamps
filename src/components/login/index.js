import PropTypes from 'prop-types';
import Logo from '../../assets/stamps.png';

import './styles.css';

export const LoginButton = ({ disabled, handleSubmit, text, type }) => {
  return (
    <p>
      <button className='green-button' disabled={disabled} type={type} onClick={handleSubmit}>
        {text.toUpperCase()}
      </button>
    </p>
  );
}

export const LoginInput = ({ placeholder, type, name, required, value, onChange, onBlur }) => {
  return (
    <p>
      <input className='stretched-input'
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
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
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string
};

LoginInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};
