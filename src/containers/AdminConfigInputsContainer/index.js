import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import AdminConfigInputs from '../../components/AdminConfigInputs';
import { createValidator, required } from '../../services/validations';

const validate = createValidator({
  firstName: [required],
  lastName: [required],
  password: [required]
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

export default connect(mapStateToProps, null)
  (reduxForm(formConfig)(AdminConfigInputsContainer));