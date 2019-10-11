import React, { Fragment } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductDetailDescription from '../../components/ProductDetailDescription';
import ProductSpecification from '../../components/ProductSpecification';

import '../../assets/styles/main.scss';

const ProductsDetail = () => {
	return (
		<Fragment>
			<Header />
			<ProductDetailDescription />
			<ProductSpecification />
			<Footer />
		</Fragment>
	)
}

export default ProductsDetail;