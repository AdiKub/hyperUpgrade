import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { getTotalPrice } from '../../services/helpers'
import './styles.scss';
import pc_01 from '../../assets/images/categoryImages/01.jpg'

const ProductCard = (props) => {
	const { cart, setPcToCartStartAction, deletePcFromCartStartAction } = props;

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
							<div key={pc.pc._id} className='product-cart-table-items product-cart-table-line'>
								<div className='product-cart-table__card product-cart-table__product'>
									<div >
										<img
											src={pc_01}
											alt='pc'
											className='product-cart-table__card_img' />
									</div>
									<h4 className='product-cart-table__card__name'> {pc.pc.pcname} </h4>
								</div>
								<div className='product-cart-table-header__name product-cart-table__available'>
									<span > {pc.pc.inStock ? 'in stock' : 'Coming Soon'}  </span>
								</div>
								<div className='product-cart-table-header__name product-cart-table__available'>
									<span > {pc.pc.price.replace(/\D/g, "")} $ </span>
								</div>
								<div className='product-cart-table-header__name product-cart-table__total'>
									<div className='product-cart-table-count-wrapper'>
										<button
											onClick={() => deletePcFromCartStartAction(pc)}
											className='product-cart-table-count__button'> - </button>
										<button className='product-cart-table-count__button'>{pc.number}</button>
										<button
											onClick={() => setPcToCartStartAction(pc.pc)}
											className='product-cart-table-count__button'> + </button>
									</div>
								</div>

								<div className='product-cart-table-header__name product-cart-table__available'>
									<span > {pc.pc.price.replace(/\D/g, "") * pc.number} $ </span>
								</div>
								<div className='product-cart-table-header__name product-cart-table__available'>
									<FontAwesomeIcon 
									onClick={()=> deletePcFromCartStartAction(pc.pc)}
									icon={faTrashAlt} 
									className='product-cart-table__delete' />
								</div>
							</div>
						)}
						<div className='product-cart-table-items product-cart-table-line'>
							<div className='product-cart-table__card product-cart-table__product'>

							</div>
							<div className='product-cart-table-header__name product-cart-table__available'>

							</div>
							<div className='product-cart-table-header__name product-cart-table__total'>
								<button>  </button>
							</div>
							<div className='product-cart-table-header__name product-cart-table__available'>
								total {getTotalPrice(cart)}$
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProductCard;