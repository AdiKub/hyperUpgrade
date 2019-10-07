import React, { Fragment } from 'react';
import MainProductList from '../../components/MainProductList';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Header from '../../components/Header';

import '../../assets/styles/main.scss';

const Home = () => {
	return (
	<Fragment>
		<Header />
		<Main />
		<MainProductList />
		<Footer />
	</Fragment>
	)
}

export default Home;