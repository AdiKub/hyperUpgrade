import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const ProductInteractive = (props) => {
  const { selectedPc } = props;
  const pathName = window.location.pathname === '/detail';
  return (
    <div 
      style={{borderTop: pathName  && '1px solid #5c5c5c'}}
      className='product-card-interactive'>
      <div className='product-card-interactive-buy'>
        <span
          style={{
            fontSize: pathName && '150%', 
            fontWeight: pathName && '900',
            color: pathName && '#e91330'}}
          className='product-card-interactive-buy__price'> {selectedPc.price}$</span>
        <button className='product-card-interactive-buy__card'>Add to Card</button>
      </div>
      <div className='product-card-interactive-info-links'>
        <Link to='/configurator'>
          <button className='product-card-interactive-info-links_button'>configurator</button>
        </Link>
        {!pathName && 
          <Link to='/detail'>
           <button 
              onClick={ () => localStorage.setItem( 'selectedPC' , selectedPc._id) }
              className='product-card-interactive-info-links_button'>view detail</button>
          </Link>
        }
      </div>
    </div>
  )
}
export default ProductInteractive;


