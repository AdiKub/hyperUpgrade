import React from 'react';
import { Field } from 'redux-form';

import customInputField from '../CustomFields';
import './styles.scss';

const Delivery = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
  } = props;

  const onSubmitHandle = (formValues) => {
    console.log(formValues)
  };

  return (
    <div className='delivery'>
      <div className='container'>
        <div className='delivery-wrapper'>

          <form
            className='delivery-form'
            onSubmit={handleSubmit(onSubmitHandle)}>
            <div>
              <div className='delivery-form-container'>
                <label>First name</label>
                <Field
                  className='delivery-form__input'
                  name="firstName"
                  component={customInputField}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className='delivery-form-container'>
                <label>Last name</label>
                <Field
                  className='delivery-form__input'
                  name="lastName"
                  component={customInputField}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className='delivery-form-container'>
              <label>Email</label>
              <Field
                className='delivery-form__input'
                name="email"
                component={customInputField}
                type="email"
                placeholder="Email for confirm the order"
              />
            </div>
            <div className='delivery-form-container'>
              <label>Phone Number</label>
              <Field
                className='delivery-form__input'
                name="phoneNumber"
                component={customInputField}
                type="integer"
                placeholder="Phone Number"
              />
            </div>
            <div className='delivery-form-container'>
              <label>Address</label>
              <Field
                className='delivery-form__input'
                name="address"
                component={customInputField}
                type="text"
                placeholder="Location for delivery"
              />
            </div>
            <button
              className='delivery-form__button'
              type="submit"
              disabled={pristine || submitting}>
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Delivery;