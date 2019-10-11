import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import pc_01 from '../../assets/images/categoryImages/01.jpg'

const ProductCard = () => {

	return (
		<div className='product-cart'>
			<div className='container'>
				<div className='product-cart-wrapper'>
					<h2 className='product-cart__title'>My cart</h2>
					<div className='product-cart-table'>
						<div className='product-cart-table-header'>
							<h4 className='product-cart-table-header__name product-cart-table__product'>product</h4>
							<h4 className='product-cart-table-header__name product-cart-table__available'>Available</h4>
							<h4 className='product-cart-table-header__name product-cart-table__total'>Item Total</h4>
							<h4 className='product-cart-table-header__name product-cart-table__subtotal'>Subtotal</h4>
						</div>
						<div className='product-cart-table-items'>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProductCard;