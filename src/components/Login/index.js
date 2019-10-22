import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './styles.scss';

const Login = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div className='login'>
      <div className='container'>
        <div className='login-wrapper'>
          <form className='login-form' onSubmit={handleSubmit}>
            <div className='login-form-container'>
              <label className='login-form__label'>First Name</label>
              <div>
                <Field
                  className='login-form__input'
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className='login-form-container'>
              <label className='login-form__label'>Last Name</label>
              <div>
                <Field
                  className='login-form__input'
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className='login-form-container'>
              <label className='login-form__label'>Email</label>
              <div>
                <Field
                  className='login-form__input'
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className='login-form-container'>
              <button className='login-form__button' type="submit" disabled={pristine || submitting}>
                Submit
              </button>
              <button className='login-form__button' type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(Login)

