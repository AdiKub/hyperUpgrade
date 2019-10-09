import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import '../../assets/styles/main.scss';

const Products = () => {
	return (
	<Fragment>
		<Header />
		<ProductList />
		<Footer />
	</Fragment>
	)
}

export default Products;