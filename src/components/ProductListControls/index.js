import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountUpAlt, faSortAmountDownAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const ProductListControls = (props) => {
	const { getPcsByCotegoryStartAction } = props;
	const [sortParams, setsortParams] = useState(false);
	const cotegory = localStorage.getItem('pcCategory')
	const sortParamArray = ['price', 'populars', 'rating'];
	
	useEffect(()=>{
		sortParams && getPcsByCotegoryStartAction(
			`${cotegory}?_sort=${sortParams.sortName}&_order=${sortParams.bool ? 'asc' : 'desc' }`
		)
	},[sortParams, getPcsByCotegoryStartAction]);

	const handleChangeListInput = (e)=>{
		getPcsByCotegoryStartAction(`${cotegory}?q=${e}`) 
	};

	return (
			<div className='product-list-controls'>
				<div className='product-list-controls-sorting'>
					<h4 className='product-list-controls-sorting__name'>sorting by:</h4>
					{sortParamArray.map((key)=> (
						<button
							key={key} 
							onClick={()=> setsortParams({sortName: key, bool: !sortParams.bool})}				
							className='product-list-controls-sorting_button'>
							{key}
							<FontAwesomeIcon
								className="product-list-controls-sorting_icon"
								icon={
									sortParams.sortName === key && sortParams.bool ? 
									faSortAmountDownAlt :
									faSortAmountUpAlt
								}
							/>
						</button>
					))}
				</div>
				<div className='product-list-controls-search'>
					<input
						onChange={(e)=> handleChangeListInput(e.target.value) }
						className='product-list-controls-search_input'>
					</input>
					<FontAwesomeIcon
						className="product-list-controls-search__icon"
						icon={faSearch}
					/>
				</div>
		</div>
	)
}
export default ProductListControls;