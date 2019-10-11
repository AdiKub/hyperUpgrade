import React, { Fragment } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductCart from '../../components/ProductCart';
import '../../assets/styles/main.scss';

const MyCart = () => {
	return (
	<Fragment>
		<Header />
        <ProductCart />
		<Footer />
	</Fragment>
	)
}

export default MyCart;