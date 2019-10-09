import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUpAlt, faSortAmountDownAlt, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';

import ProductCard from '../ProductCard'
import './styles.scss';

const ProductList = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className='product-list'>
      <div className='container'>
        <div className='product-list-wrapper'>
          <h2 className='product-list__title'>gamign computers</h2>
          <div className='product-list-controls'>
            <div className='product-list-controls-sorting'>
              <h4 className='product-list-controls-sorting__name'>sorting by:</h4> 
              <button className='product-list-controls-sorting_button'>
                price 
                <FontAwesomeIcon
                  className="product-list-controls-sorting_icon"
                  icon={faSortAmountUpAlt}
                />
              </button>
              <button className='product-list-controls-sorting_button'>
                popular 
                <FontAwesomeIcon
                  className="product-list-controls-sorting_icon"
                  icon={faSortAmountUpAlt}
                />
              </button>
              <button className='product-list-controls-sorting_button'>
                ratign 
                <FontAwesomeIcon
                  className="product-list-controls-sorting_icon"
                  icon={faSortAmountUpAlt}
                />
              </button>
            </div>
            <div className='product-list-controls-search'>
              <input className='product-list-controls-search_input'></input>
              <FontAwesomeIcon
                  className="product-list-controls-search__icon"
                  icon={faSearch}
                />
            </div>
          </div>
           
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