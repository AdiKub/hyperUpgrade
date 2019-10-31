import React, { Fragment } from 'react';

import DeliveryContainer from '../containers/DeliveryContainer';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/HeaderContainer';

import '../assets/styles/main.scss';

const Delivery = () => {
	return (
	<Fragment>
		<HeaderContainer />
    <DeliveryContainer />
		<Footer />
	</Fragment>
	)
}

export default Delivery;