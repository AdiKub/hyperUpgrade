import React from 'react';
import { Field } from 'redux-form';

import customInputField from '../CustomFields';
import CustomTextArea from '../CustomTextArea';
import './styles.scss';

const AdminConfigInputs = (props) => {
  const { handleSubmit } = props;
  const specNameArray = [
    'graphics card',
    'processor',
    'motherboard',
    'cpu cooler',
    'RAM',
    'SSD',
    'computer cases',
    'Hard disk drive',
    'Power Supplies'
  ];

  const onSubmitHandle = () => {
  
  };
  return (
    <div className='admin-config-inputs'>
      <div className='container'>
        <div className='admin-config-inputs-wrapper'>
          <form className='admin-config-inputs-form' >
            <div
              className='admin-config-inputs-form-container'>
              <label>PC name</label>
              <Field
                className='admin-config-inputs-form__input admin-config-inputs-form__input__name'
                name='pcname'
                component={customInputField}
                type="text"
              />
            </div>
            <div
              className='admin-config-inputs-form-container'>
              <label>description</label>
              <Field
                className='admin-config-inputs-form_textarea'
                name='description'
                component={CustomTextArea}
                type="text"
              />
            </div>
            {specNameArray.map((specName) => (
              <div
                key={specName}
                className='admin-config-inputs-form-container'>
                <label>{specName}</label>
                <Field
                  className='admin-config-inputs-form__input'
                  name={specName}
                  component={customInputField}
                  type="text"
                />
              </div>
            ))}
             <div
              className='admin-config-inputs-form-container'>
              <label>Price $</label>
              <Field
                className='admin-config-inputs-form__input admin-config-inputs-form__input__name'
                name='price'
                component={customInputField}
                type="number"
              />
            </div>
            <div className='admin-config-inputs-form-container'>
              <label htmlFor="employed">In Stock</label>
              <Field
                  className='admin-config-inputs-form__check__box'
                  name="inStock"
                  id="inStock"
                  component="input"
                  type="checkbox"
                />
            </div>

            <div className='admin-config-inputs-form-container'>
              <label>Category</label>
              <Field
                className='admin-config-inputs-form__select'
                name="category" 
                component="select">
                <option />
                <option value="inexpensive">inexpensive</option>
                <option value="perfect">perfect</option>
                <option value="powerful">powerful</option>
                <option value="professional">professional</option>
              </Field>
            </div>
            <button 
              className='admin-config-inputs-form__button'>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default AdminConfigInputs;
