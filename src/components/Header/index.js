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
						<Link to='/products'><a href='asdfasd.asdf' className='header-list_link'> products </a> </Link>
						<Link to='/overview'><a href='asdfasd.asdf' className='header-list_link'> overview </a> </Link>
						<Link to='/contacts'><a href='asdfasd.asdf' className='header-list_link'> contacts </a> </Link>
							<a href='/d' className='header-list_link header-list_link_login'> sign in </a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)

}
export default Hearder