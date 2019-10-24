import React, { Fragment } from 'react';

import Footer from '../components/Footer';
import HeaderContainer from '../containers/HeaderContainer';
import LoginContainer from '../containers/LoginContainer';

import '../assets/styles/main.scss';

const LoginPage = () => {
	
	return (
		<Fragment>
			<HeaderContainer />
      <LoginContainer />
			<Footer />
		</Fragment>
	)
};

  
export default LoginPage;
