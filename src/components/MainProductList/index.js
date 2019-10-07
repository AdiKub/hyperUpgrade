import React from 'react';

import './styles.scss';
import basic from '../../assets/images/categoryImages/01.jpg'
import optimal from '../../assets/images/categoryImages/02.jpg'
import prof from '../../assets/images/categoryImages/03.jpg'
import extreme from '../../assets/images/categoryImages/04.jpg'

const MainProductList = () => {
	const pcArr = [basic, optimal, prof, extreme ]
	const categoryArr = [
		'Недорогие игровые компьютеры', 'Идеальные игровые компьютеры', 
		'Профессиональные игровые компьютеры', 'Самые мощные игровые компьютеры'
	]

	return (
		<div className='main-product-list'>
			<div className='container'>
				<div className='main-product-list-wrapper'>
					<h2 className='main-product-list__title'>
						Игровые компьютеры
					</h2>
					<div className='main-product-list-categories'>
					{categoryArr.map((category, index)=>(
						<div key={category}>
							<div className='main-product-list-category'>
								<span className='main-product-list-category__name'>
									{category }
								</span> 
								<img src={pcArr[index]} className='main-product-list-category__image' alt='pc'/>
								<a className='main-product-list-category__link'> подробнее </a>
							</div>
						</div>
					))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default MainProductList;