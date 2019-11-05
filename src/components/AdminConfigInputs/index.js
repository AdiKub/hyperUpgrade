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
    'ard disk drive',
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