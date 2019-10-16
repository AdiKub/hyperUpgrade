import React from 'react';

import ProductCard from '../ProductCard'
import ProductListControls from '../ProductListControls'
import './styles.scss';

const ProductList = (props) => {
  const { cotegoryPCs } = props;

  return (
    <div className='product-list'>
      <div className='container'>
        <div className='product-list-wrapper'>
          <h2 className='product-list__title'>gamign computers</h2>
          <ProductListControls />
          <div className='product-list-pcs'>
            {cotegoryPCs.map((pc) => (
              <div key={pc._id}>
                <ProductCard pc={pc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductList;