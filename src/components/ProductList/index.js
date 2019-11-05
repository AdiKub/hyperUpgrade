import React, { useEffect } from 'react';

import ProductCard from '../ProductCard'
import ProductListControlsContainer from '../../containers/ProductListControlsContainer'
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
          <h2 className='product-list__title'>{category} gamign computers</h2>
          <ProductListControlsContainer />
          <div className='product-list-pcs'>
            {cotegoryPCs.length !== 0 && 
              cotegoryPCs.map((pc) => (
                <div key={pc._id}>
                  <ProductCard pc={pc} />
                </div>
              )) 
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductList;