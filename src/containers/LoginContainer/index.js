import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
//import { setPcToCartStart } from '../../store/actions';

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
  cart: store.pcCart.pcCart,
});

// const mapDispatchToProps = dispatch => ({
//   setPcToCartStartAction: () => dispatch(setPcToCartStart()),
// });

export default connect(mapStateToProps, null)(reduxForm(formConfig)(LoginContainer));