import React, { Fragment } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCartContainer from '../containers/ProductCartContainer';
import '../assets/styles/main.scss';

const MyCart = () => {
	return (
	<Fragment>
		<Header />
        <ProductCartContainer />
		<Footer />
	</Fragment>
	)
}

export default MyCart;