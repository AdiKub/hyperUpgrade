import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductListContainer from '../../containers/ProductListContainer';

import '../../assets/styles/main.scss';

const Products = () => {
	return (
	<Fragment>
		<Header />
		<ProductListContainer />
		<Footer />
	</Fragment>
	)
}

export default Products;