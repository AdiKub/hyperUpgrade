import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUpAlt, faSortAmountDownAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const ProductListControls = () => {

	return (
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
	)
}
export default ProductListControls;