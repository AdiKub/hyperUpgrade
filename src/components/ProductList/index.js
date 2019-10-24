import React, { useEffect } from 'react';

import ProductCard from '../ProductCard'
import ProductListControls from '../ProductListControls'
import './styles.scss';

const ProductList = (props) => {
  const { cotegoryPCs, getPcsByCotegoryStartAction } = props;
  const category = localStorage.getItem('pcCategory');
  
  useEffect(()=>{
    getPcsByCotegoryStartAction(category)
  },[category, getPcsByCotegoryStartAction])

  return (
    <div className='product-list'>
      <div className='container'>
        <div className='product-list-wrapper'>
          <h2 className='product-list__title'>gamign computers</h2>
          <ProductListControls />
          <div className='product-list-pcs'>
            {cotegoryPCs.length ? cotegoryPCs.map((pc) => (
              <div key={pc._id}>
                <ProductCard pc={pc} />
              </div>
            )) : 
            <h3 
              style={{
                color: 'red', 
                marginTop: '50px'
              }}
              className='product-list__title'>
              Server error
            </h3>
          }
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductList;