import React from 'react';
import { Link } from 'react-router-dom';

import { getTotalCount } from '../../services/helpers'
import './styles.scss';

const Hearder = (props) => {
	const { pcCart, getPcsByCotegoryStartAction, match } = props;
	const categoryPCArr = [
		'inexpensive', 'perfect',
		'professional', 'powerful'
	]
	
	return (
		<div className='header'>
			<div className='container'>
				<div className='header-wrapper'>
					<Link to='/'>
						<h2 className='header__title header__title__h2'>
							hyper
							<span className='header__title__span'>upgrade</span>
						</h2>
					</Link>
					<div>
						<div className='header-list'>
							<Link to='/products'>
								<div className='header-list_link header-list_link_products' > products
								<div className='header-list_link_categories'>
										{categoryPCArr.map((category) =>
											<div
												onClick={() => {
													getPcsByCotegoryStartAction(category)
													localStorage.setItem('pcCategory', category)}}
												className='header-list_link_categories_category' key={category} >
												{category}
											</div>
										)}
									</div>
								</div>
							</Link>
							<Link to='/overview'><span className='header-list_link'> overview </span> </Link>
							<Link to='/contacts'><span className='header-list_link'> contacts </span> </Link>
							<Link to='/mycart'>
								<div className='header-list_link_login header-list_link'>
									my cart
								<span className='header-list_link_cart_count'>
									{getTotalCount(pcCart)}
								</span>
								</div>
							</Link>
							<Link to='/login'>
								<span className='header-list_link header-list_link_login'> sign in / join </span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}
export default Hearder