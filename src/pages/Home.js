import React, { Fragment } from 'react';
import MainProductListContainer from '../containers/MainProductListContainer';
import Main from '../components/Main';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/HeaderContainer';

import '../assets/styles/main.scss';

const Home = () => {
	return (
	<Fragment>
		<HeaderContainer />
		<Main />
		<MainProductListContainer />
		<Footer />
	</Fragment>
	)
}

export default Home;