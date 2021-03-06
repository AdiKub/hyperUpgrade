import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loginUserStart, registerStart, logoutUserStart } from '../../store/actions';

import Login from '../../components/Login';
import { createValidator, email, required } from '../../services/validations';

const validate = createValidator({
  firstName: [required],
  email: [required, email],
  lastName: [required],
  password: [required]
});

const formConfig = {
  form: 'login',
  validate,
};

const LoginContainer = props => <Login {...props} />;

const mapStateToProps = store => ({
  login: store.login,
});

const mapDispatchToProps = dispatch => ({
  loginUserStartAction: (requestParams) => dispatch(loginUserStart(requestParams)),
  registerStartAction: (requestParams) => dispatch(registerStart(requestParams)), 
  logoutUserStartAction: (requestParams) => dispatch(logoutUserStart(requestParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(LoginContainer));