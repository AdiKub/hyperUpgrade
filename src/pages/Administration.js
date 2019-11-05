import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/HeaderContainer';
import AdminConfigInputsContainer from '../containers/AdminConfigInputsContainer';
import AdminImageEditor from '../components/AdminImageEditor';

import '../assets/styles/main.scss';

const Administration = () => {
	return (
	<Fragment>
		<HeaderContainer />
		<AdminConfigInputsContainer />
		<AdminImageEditor />
		<Footer />
	</Fragment>
	)
};

export default Administration;