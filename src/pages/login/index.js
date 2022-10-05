import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { LoginButton, LoginInput, LoginLogo } from '../../components';

import './styles.css';

const LoginCard = (props) => {
  const [user] = useState({ email: '', password: '' });

  return (
    <Formik
       initialValues={user}
       validate={values => {
         const errors = {};

         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        props.login(values).then(() => setSubmitting(false));
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        <div>
          <LoginLogo />
          <LoginInput
            placeholder="Email"
            type="email"
            name="email"
            required={true}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (<span style={{ color: 'red' }}>{errors.email}</span>)}
          <LoginInput
            placeholder="Password"
            type="password"
            name="password"
            required={true}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (<span style={{ color: 'red' }}>{errors.password}</span>)}
          <p>Forgot Password?</p>
          <LoginButton
            disabled={isSubmitting}
            text="login"
            type="submit"
            handleSubmit={handleSubmit}
          />
        </div>
      )}  
     </Formik>
  );
}

LoginCard.propTypes = {
  login: PropTypes.func,
};

export default LoginCard;