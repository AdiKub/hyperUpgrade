import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUpAlt, faSortAmountDownAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const ProductListControls = (props) => {
	const { getPcsByCotegoryStartAction } = props;
	const cotegory = localStorage.getItem('pcCategory')
	const [sortParams, setsortParams] = useState(false);
	
	useEffect(()=>{
		sortParams && getPcsByCotegoryStartAction(
			`${cotegory}?_sort=${sortParams.sortName}&_order=${sortParams.bool ? 'asc' : 'desc' }`
		)
	},[sortParams, getPcsByCotegoryStartAction]);
	
	return (
			<div className='product-list-controls'>
				<div className='product-list-controls-sorting'>
					<h4 className='product-list-controls-sorting__name'>sorting by:</h4>
					<button 
						onClick={()=> setsortParams({sortName: 'price', bool: !sortParams.bool})}				
						className='product-list-controls-sorting_button'>
						price
            <FontAwesomeIcon
							className="product-list-controls-sorting_icon"
							icon={
								sortParams.sortName === 'price' && sortParams.bool ? 
								faSortAmountDownAlt :
								faSortAmountUpAlt
							}
						/>
					</button>
					<button
						onClick={()=> setsortParams({sortName: 'populars', bool: !sortParams.bool})}			 
						className='product-list-controls-sorting_button'>
						populars
          <FontAwesomeIcon
							className="product-list-controls-sorting_icon"
							icon={
								sortParams.sortName === 'populars' && sortParams.bool ? 
								faSortAmountDownAlt :
								faSortAmountUpAlt
							}
						/>
					</button>
					<button
						onClick={()=> setsortParams({sortName: 'rating', bool: !sortParams.bool})}			 
						className='product-list-controls-sorting_button'>
						rating
          <FontAwesomeIcon
							className="product-list-controls-sorting_icon"
							icon={
								sortParams.sortName === 'rating' && sortParams.bool ? 
								faSortAmountDownAlt :
								faSortAmountUpAlt
							}
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