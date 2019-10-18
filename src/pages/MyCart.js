import React, { Fragment } from 'react';

import Footer from '../components/Footer';
import HeaderContainer from '../containers/HeaderContainer';
import ProductCartContainer from '../containers/ProductCartContainer';
import '../assets/styles/main.scss';

const MyCart = () => {
	return (
	<Fragment>
		<HeaderContainer />
        <ProductCartContainer />
		<Footer />
	</Fragment>
	)
}

export default MyCart;