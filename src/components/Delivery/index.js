import React from 'react';

import DeliveryFormContainer from '../../containers/DeliveryFormContainer';
//import DeliveryList from '../DeliveryList';
import './styles.scss';

const Delivery = () => {

  return (
    <div className='delivery'>
      <div className='container'>
        <div className='delivery-wrapper'>
          <DeliveryFormContainer />
        </div>
      </div>
    </div>
  )
}
export default Delivery;