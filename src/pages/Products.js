import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/HeaderContainer';
import ProductListContainer from '../containers/ProductListContainer';

import '../assets/styles/main.scss';

const Products = () => {
	return (
	<Fragment>
		<HeaderContainer />
		<ProductListContainer />
		<Footer />
	</Fragment>
	)
}

export default Products;