import React from 'react';

import ProductCard from '../ProductCard'
import ProductListControls from '../ProductListControls'
import './styles.scss';

const ProductList = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className='product-list'>
      <div className='container'>
        <div className='product-list-wrapper'>
          <h2 className='product-list__title'>gamign computers</h2>
          <ProductListControls />
          <div className='product-list-pcs'>
            {arr.map((pc) => (
              <div key={pc}>
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductList;