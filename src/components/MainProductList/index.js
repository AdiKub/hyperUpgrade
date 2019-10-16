import React from 'react';
import { Link } from 'react-router-dom';

import basic from '../../assets/images/categoryImages/01.jpg'
import optimal from '../../assets/images/categoryImages/02.jpg'
import prof from '../../assets/images/categoryImages/03.jpg'
import extreme from '../../assets/images/categoryImages/04.jpg'
import './styles.scss';

const MainProductList = (props) => {
	const { getPcsByCotegoryStartAction } = props;
	const pcArr = [basic, optimal, prof, extreme]
	const categoryArr = ['Gaming']
	const categoryPCArr = [
		'inexpensive', 'perfect',
		'professional ', 'powerful'
	]

	return (
		<div className='main-product-list'>
			<div className='container'>
				{categoryArr.map((categoryArr) => (
					<div 
						key={categoryArr} 
						className='main-product-list-wrapper'>
						<h2 className='main-product-list__title'>
							{categoryArr} computers
						</h2>
						<div className='main-product-list-categories'>
							{categoryPCArr.map((category, index) => (
								<div key={category}>
									<div className='main-product-list-category'>
										<span className='main-product-list-category__name'>
											{category +' '+categoryArr}
										</span>
										<img src={pcArr[index]} className='main-product-list-category__image' alt='pc' />
										<Link to='/products'>
											<span
												onClick={()=> getPcsByCotegoryStartAction(category)}
												className='main-product-list-category__link'> 
												more
											</span>
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default MainProductList;