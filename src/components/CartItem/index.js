import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import pc_01 from '../../assets/images/categoryImages/01.jpg'

const CartItem = (props) => {
  const { setPcToCartStartAction, deletePcFromCartStartAction, cartPc } = props;

  return (
    <div key={cartPc.pc._id} className='product-cart-table-items product-cart-table-line'>
      <div className='product-cart-table__card product-cart-table__product'>
        <div >
          <img
            src={pc_01}
            alt='pc'
            className='product-cart-table__card_img' />
        </div>
        <h4  className='product-cart-table__card__name'> {cartPc.pc.pcname} </h4>
      </div>
      <div className='product-cart-table-header__name product-cart-table__available'>
        <span > {cartPc.pc.inStock ? 'in stock' : 'Coming Soon'}  </span>
      </div>
      <div className='product-cart-table-header__name product-cart-table__available'>
        <span > {cartPc.pc.price} $ </span>
      </div>
      <div className='product-cart-table-header__name product-cart-table__total'>
        <div className='product-cart-table-count-wrapper'>
          <button
            onClick={() => deletePcFromCartStartAction(cartPc)}
            className='product-cart-table-count__button'> - </button>
          <button className='product-cart-table-count__button'>{cartPc.number}</button>
          <button
            onClick={() => setPcToCartStartAction(cartPc.pc)}
            className='product-cart-table-count__button'> + </button>
        </div>
      </div>

      <div className='product-cart-table-header__name product-cart-table__available'>
        <span > {cartPc.pc.price.replace(/\D/g, "") * cartPc.number} $ </span>
      </div>
      <div className='product-cart-table-header__name product-cart-table__available'>
        <FontAwesomeIcon
          onClick={() => deletePcFromCartStartAction(cartPc.pc)}
          icon={faTrashAlt}
          className='product-cart-table__delete' />
      </div>
    </div>
  )
}

export default CartItem;
