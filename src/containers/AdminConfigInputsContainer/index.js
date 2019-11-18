import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import AdminConfigInputs from '../../components/AdminConfigInputs';
import { createValidator, required, integer } from '../../services/validations';


const validate = createValidator({
  'graphics card': [required],
  'processor': [required],
  'motherboard': [required],
  'cpu cooler': [required],
  'RAM': [required],
  'SSD': [required],
  'Hard disk drive': [required],
  'Power Supplies': [required],
  'description': [required],
  'pcname': [required],
  'price': [integer, required],
});

const formConfig = {
  form: 'ConfigListing',
  validate,
};

const AdminConfigInputsContainer = props => <AdminConfigInputs {...props} />;

const mapStateToProps = store => ({

});

// const mapDispatchToProps = dispatch => ({
// });

export default connect(mapStateToProps, null)(reduxForm(formConfig)(AdminConfigInputsContainer));