import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import ProductInteractive from '../ProductInteractive'
import './styles.scss';

const ProductCard = (props) => {
	const { pc } = props; 

	return (
		<div className='product-card'>
			<div className='product-card-images'>
				<img 
					alt='pc' 
					src={pc.picture} 
					className='product-card__image' />
			</div>
			<div className='product-card-rating'>
				{[1, 2, 3, 4, 5].map((num) => (                       // make rating stars
					<FontAwesomeIcon
						style={{ color: num <= pc.rating && '#ff4848' }}  // set active color for raiting stars
						key={num}
						className="product-card-rating__icon"
						icon={faStar}
					/>
				))}
			</div>
			<h2 className='product-card__name'> Hyper {pc.pcname} </h2>
			<ProductInteractive selectedPc={pc} />
			<div className='product-card-specification'>
				{Object.keys(pc.specifications).map((spec) => (
					<div key={spec} className='product-card-specification-wrapper'>
						<span 
							className='product-card-specification__name'>
							{spec}
						</span>
						<span 
							className='product-card-specification__model'>
							{pc.specifications[spec]}
					</span>
					</div>
				))}
			</div>
		</div>
	)
}
export default ProductCard;