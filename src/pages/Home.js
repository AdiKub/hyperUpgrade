import React, { Fragment } from 'react';
import MainProductListContainer from '../containers/MainProductListContainer';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../assets/styles/main.scss';

const Home = () => {
	return (
	<Fragment>
		<Header />
		<Main />
		<MainProductListContainer />
		<Footer />
	</Fragment>
	)
}

export default Home;