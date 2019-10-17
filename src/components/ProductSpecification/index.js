import React from 'react';

import './styles.scss';

const ProductSpecification = (props) => {
  const { selectedPc } = props;

  return (
    <div className='product-specifications'>
      <div className='product-specifications-line'>
        Specifications
      </div>
      <div className='container'>
        <div className='product-specifications-wrapper'>
          <div className='product-specifications-list'>
            {Object.keys(selectedPc.specifications).map((detail) => (
              <div 
                key={detail}
                className='product-specifications-list-box'>
                <span className='product-specifications-list__name'> {detail} </span>
                <span className='product-specifications-list__model'> { selectedPc.specifications[detail] } </span> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductSpecification;