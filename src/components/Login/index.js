import React from 'react';
import { Field } from 'redux-form';

import customInputField from '../CustomFields';
import './styles.scss';

const Login = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  const onSubmitHandle = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className='login'>
      <div className='container'>
        <div className='login-wrapper'>
          <form className='login-form' onSubmit={handleSubmit(onSubmitHandle)}>
            <div className='login-form-container'>
                <Field
                  className='login-form__input'
                  name="firstName"
                  component={customInputField}
                  type="text"
                  placeholder="First Name"
                />
            </div>
            <div className='login-form-container'>
                <Field
                  className='login-form__input'
                  name="lastName"
                  component={customInputField}
                  type="text"
                  placeholder="Last Name"
                />
            </div>
            <div className='login-form-container'>
                <Field
                  className='login-form__input'
                  name="email"
                  component={customInputField}
                  type="email"
                  placeholder="Email"
                />
            </div>
            <div className='login-form-container'>
              <button className='login-form__button' type="submit" disabled={pristine || submitting}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;

