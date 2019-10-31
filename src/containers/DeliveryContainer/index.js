import React from 'react';
import { connect } from 'react-redux';
import {  } from '../../store/actions';
import { reduxForm } from 'redux-form';

import Delivery from '../../components/Delivery';
import { createValidator, email, required, integer } from '../../services/validations';

const validate = createValidator({
  firstName: [required],
  lastName: [required],
  email: [required, email],
  phoneNumber: [required, integer],
  address: [required]
});

const formConfig = {
  form: 'delivery',
  validate,
};

const DeliveryContainer = props => <Delivery {...props} />;

const mapStateToProps = store => ({
  cart: store.pcCart.pcCart
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(DeliveryContainer));