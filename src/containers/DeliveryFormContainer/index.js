import React from 'react';
import { connect } from 'react-redux';
import {  } from '../../store/actions';
import { reduxForm } from 'redux-form';

import DeliveryForm from '../../components/DeliveryForm';
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

const DeliveryFormContainer = props => <DeliveryForm {...props} />;

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(DeliveryFormContainer));