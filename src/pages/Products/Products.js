import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

import '../../assets/styles/main.scss';

const Products = () => {
	return (
	<Fragment>
		<Header />
		<ProductCard />
		<Footer />
	</Fragment>
	)
}

export default Products;