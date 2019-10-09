import React from 'react';

import './styles.scss';
import pc_01 from '../../assets/images/categoryImages/01.jpg'

const ProductCard = () => {

	return (
		<div className='product-card'>
			<div className='product-card-images'>
				<img alt='pc' src={pc_01} className='product-card__image' />
			</div>
			<h2 className='product-card__name'> hyper lite</h2>
			<div className='product-card-buy'>
				<span className='product-card-buy__price'> price 1200$</span>
				<button className='product-card-buy__card'>Add to Card</button>
			</div>
			<div className='product-card-info-links'>
				<button className='product-card-info-links_button'>configurator</button>
				<button className='product-card-info-links_button'>view detail</button>
			</div>
			<div className='product-card-specification'>
				{[1, 2, 3, 4, 5, 6].map((spec) => (
					<div key={spec} className='product-card-specification-wrapper'>
						<span className='product-card-specification__name'>
							GPU
					</span>
						<span className='product-card-specification__model'>
							MSI GeForce RTX 2060 SUPER VENTUS
					</span>
					</div>
				))}
			</div>
		</div>
	)
}
export default ProductCard;