import React from 'react';

import './styles.scss';

const Hearder = () => {
	return (
		<div className='header'>
			<div className='container'>
				<div className='header-wrapper'>
					<h2 className='header__title header__title__h2'>
						hyper
							<span className='header__title__span'>upgrade</span>
					</h2>
					<div>
						<ul className='header-list'>
							<a href='asdfasd.asdf' className='header-list_link'> products </a>
							<a href='asdfasd.asdf' className='header-list_link'> overview </a>
							<a href='asdfasd.asdf' className='header-list_link'> contacts </a>
							<a href='asdfasd.asdf' className='header-list_link header-list_link_login'> sing in </a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)

}
export default Hearder