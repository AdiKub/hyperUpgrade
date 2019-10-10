import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Hearder = () => {
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
						<ul className='header-list'>
						<Link to='/products'><span className='header-list_link'> products </span> </Link>
						<Link to='/overview'><span className='header-list_link'> overview </span> </Link>
						<Link to='/contacts'><span className='header-list_link'> contacts </span> </Link>
						<span href='/d' className='header-list_link header-list_link_login'> sign in </span>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)

}
export default Hearder