import React from 'react';

import ProductInteractiveContainer from '../../containers/ProductInteractiveContainer'
import './styles.scss';
import pcimage from '../../assets/images/categoryImages/01.jpg'

const ProductDetailDescription = (props) => {
  const { selectedPc } = props;
  return (
    <div className='product-detail-description'>
      <div className='container'>
        <div className='product-detail-description-wrapper'>
          <div className='product-detail-description-image-wrapper'>
            <img 
              alt='pc'
              className='product-detail-description-image' 
              src={pcimage} />
          </div>
          <div className='product-detail-description-info'> 
            <h2 className='product-detail-description-info__title'>HYPER</h2>
            <h3 
              className='product-detail-description-info__title'> 
              {selectedPc.pcname} </h3>
            <p 
              className='product-detail-description-info__text' > 
              {selectedPc.description} </p>
            <ProductInteractiveContainer selectedPc={selectedPc} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetailDescription;