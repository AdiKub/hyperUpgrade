import React from 'react';

import './styles.scss';

const ProductSpecification = () => {

  return (
    <div className='product-specifications'>
      <div className='product-specifications-line'>
        Specifications
      </div>
      <div className='container'>
        <div className='product-specifications-wrapper'>
          <div className='product-specifications-list'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((detail) => (
              <div 
                key={detail}
                className='product-specifications-list-box'>
                <span className='product-specifications-list__name'>graphics card </span>
                <span className='product-specifications-list__model'>MSI GeForce RTX 2060 SUPER VENTUS</span> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductSpecification;