import React, { useState } from 'react';
import { Field } from 'redux-form';

import customInputField from '../CustomFields';
import './styles.scss';

const Login = (props) => {
  const { 
    handleSubmit, 
    pristine, 
    submitting,
    loginUserStartAction,
    registerStartAction,
    login 
  } = props;
  
  const [joinBool, setJoinBool] = useState(false)
  console.log(login)
  const onSubmitHandle = (formValues) => {
    if (joinBool) {
      registerStartAction(formValues);
    } else {
      const logData = {email: formValues.email, password: formValues.password}
      loginUserStartAction(logData);
    }
  };

  return (
    <div className='login'>
      <div className='container'>
        <div className='login-wrapper'>
         
         {!login.isLogined ?
          <> 
          <div className='login-form_title'>
            <button
              onClick={() => joinBool && setJoinBool(!joinBool)}
              className={!joinBool ?
                'login-form_title_button login-form_title_button__activate' :
                'login-form_title_button'} >
              Log in
            </button>
            <button
              onClick={() => !joinBool && setJoinBool(!joinBool)}
              className={joinBool ?
                'login-form_title_button login-form_title_button__activate' :
                'login-form_title_button'} >
              Join
            </button>
          </div>         
         <form className='login-form' onSubmit={handleSubmit(onSubmitHandle)}>
            {joinBool && <div>
              <div className='login-form-container'>
                <label>First name</label>
                <Field
                  className='login-form__input'
                  name="firstName"
                  component={customInputField}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className='login-form-container'>
                <label>Last name</label>
                <Field
                  className='login-form__input'
                  name="lastName"
                  component={customInputField}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>}
            <div className='login-form-container'>
              <label>Email</label>
              <Field
                className='login-form__input'
                name="email"
                component={customInputField}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className='login-form-container'>
              <label>Password</label>
              <Field
                className='login-form__input'
                name="password"
                component={customInputField}
                type="password"
                placeholder="Password"
              />
            </div>
            <button className='login-form__button' type="submit" disabled={pristine || submitting}>
              Login
            </button>
          </form>
          {!login.responseStatuses.isSuccess && login.responseStatuses.message && 
            <h4 className='login-status_error'>{login.responseStatuses.message}</h4>
          }
          </>
         :
            <div className='login-status-wrapper'>
              <h1 className='login-status_user_name'>
                {login.user.firstName}
              </h1>
              <h2 className='login-status_text'>
                {login.responseStatuses.message}
              </h2>
            </div>
         
        }
        </div>
      </div>
    </div>
  )
}

export default Login;

