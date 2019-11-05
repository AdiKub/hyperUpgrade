import React, {Fragment} from 'react';
import './styles.scss';

const CustomTextArea = ({
  input,
  type,
  className,
  meta: { touched, error },
}) => (
  <Fragment>
    <textarea
      {...input}
      type={type}
      className={className}
    /> 
    { touched && error && <span className="input-error">{error}</span>}
  </Fragment>
);

export default CustomTextArea;