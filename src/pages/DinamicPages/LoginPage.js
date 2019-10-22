import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Footer from '../../components/Footer';
import HeaderContainer from '../../containers/HeaderContainer';
import LoginContainer from '../../containers/LoginContainer';

import '../../assets/styles/main.scss';

const LoginPage = () => {
	
	return (
		<Fragment>
			<HeaderContainer />
      <LoginContainer />
			<Footer />
		</Fragment>
	)
};

const mapStateToProps = store => ({
  selectedPc: store.pcDetail.selectedPc,
});

// const mapDispatchToProps = dispatch => ({
// 	getPcDetailStartAction: () => dispatch(getPcDetailStart()),
// });
  
export default connect(mapStateToProps, null)(withRouter(LoginPage));
