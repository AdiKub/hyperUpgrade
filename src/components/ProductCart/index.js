import React from 'react';
import { Link } from 'react-router-dom';

import { getTotalPrice } from '../../services/helpers';
import CartItemContainer from '../../containers/CartItemContainer';
import './styles.scss';

const ProductCard = (props) => {
	const { cart } = props;

	return (
		<div className='product-cart'>
			<div className='container'>
				<div className='product-cart-wrapper'>
					<h2 className='product-cart__title'>My cart</h2>
					<div className='product-cart-table'>
						<div className='product-cart-table-header product-cart-table-line'>
							<h4 className='product-cart-table-header__name product-cart-table__product'>product</h4>
							<h4 className='product-cart-table-header__name product-cart-table__available'>Available</h4>
							<h4 className='product-cart-table-header__name product-cart-table__subtotal'>price</h4>
							<h4 className='product-cart-table-header__name product-cart-table__total'>Item Total</h4>
							<h4 className='product-cart-table-header__name product-cart-table__subtotal'>Subtotal</h4>
						</div>
						{cart && cart.map((pc) =>
							<CartItemContainer key={pc.pc._id} cartPc={pc} /> 
						)}
						<div className='product-cart-table-items product-cart-table-line product-cart-table__summ'>
							<span className='product-cart-table-header__name product-cart-table__available'>
								total {getTotalPrice(cart)}$
							</span>
						</div>
						<div className='product-cart-table__delivery'>
						<Link to='delivery'>
							<button className=' product-cart-table__delivery_button' >
								delivery
							</button>
						</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProductCard;