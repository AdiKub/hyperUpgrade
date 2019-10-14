import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import ProductInteractive from '../ProductInteractive'
import './styles.scss';
import pc_01 from '../../assets/images/categoryImages/01.jpg'

const ProductCard = () => {

	return (
		<div className='product-card'>
			<div className='product-card-images'>
				<img alt='pc' src={pc_01} className='product-card__image' />
			</div>
			<div className='product-card-rating'>
				{[1, 2, 3, 4, 5].map((num) => (
					<FontAwesomeIcon
						key={num}
						className="product-card-rating__icon"
						icon={faStar}
					/>
				))}
			</div>
			<h2 className='product-card__name'> hyper lite</h2>
			<ProductInteractive />
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